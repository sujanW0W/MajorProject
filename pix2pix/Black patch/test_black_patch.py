import cv2
import numpy as np
from PIL import Image

# read image
img = cv2.imread('C:\\Users\\Shady\\Desktop\\source.png')

# median blur
median = cv2.medianBlur(img, 5)

# threshold on black
lower = (0,0,0)
upper = (15,15,15)
thresh = cv2.inRange(median, lower, upper)

# apply morphology open and close
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
morph = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (29,29))
morph = cv2.morphologyEx(morph, cv2.MORPH_CLOSE, kernel)

# filter contours on area
contours = cv2.findContours(morph, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
contours = contours[0] if len(contours) == 2 else contours[1]
result = img.copy()
for c in contours:
    area = cv2.contourArea(c)
    if area > 1500:
        cv2.drawContours(result, [c], -1, (0, 0, 255), 2)
        black_patch = c

black_patch_list = list()
black_patch_list = black_patch[0].tolist()

x_lower_limit = black_patch_list[0][0]
y_lower_limit = black_patch_list[0][1]

print(x_lower_limit, y_lower_limit)

# img_arr = np.array(img)

# # Turning the pixel values to white
# img_arr[x_lower_limit : x_lower_limit+50, y_lower_limit : y_lower_limit+50] = (255, 255, 255)

# # Saving changed image
# cv2.imwrite("changed.jpg", img_arr)

# cv2.imshow("result", result)
cv2.waitKey(0)
cv2.destroyAllWindows()


# Retriving pixel values from original image where black patch is supposed to be

im = Image.open('C:\\Users\\Shady\\Desktop\\target.png') 
pix = im.load()

values_list = list()

# Looping to scan image for each pixel value
i=0
j=0
while j<51: # 161 for 800x800 images, 51 for 256x256 images
    while i<51:
        values_list.append(pix[x_lower_limit+i,y_lower_limit+j]) # Get the RGBA Value of the pixel of an image
        i = i+1
    i = 0
    j = j+1

R_list_original, G_list_original, B_list_original = list(), list(), list()

# Appending each element of RGB to their respective lists
for RGB_tuple in values_list:
    R_list_original.append(RGB_tuple[0])
    G_list_original.append(RGB_tuple[1])
    B_list_original.append(RGB_tuple[2])

# columns in csv file
columns = [R_list_original, G_list_original, B_list_original]

# using the savetxt from numpy module
np.savetxt("original.csv", np.transpose(columns), delimiter =", ", fmt ='% s')


# Retriving pixel values from generated image where the black patch is
im = Image.open('C:\\Users\\Shady\\Desktop\\generated.png') 
pix = im.load()

values_list = list()

# Looping to scan image for each pixel value
i=0
j=0
while j<51: # 161 for 800x800 images, 51 for 256x256 images
    while i<51:
        values_list.append(pix[x_lower_limit+i,y_lower_limit+j]) # Get the RGBA Value of the pixel of an image
        i = i+1  
    i = 0
    j = j+1

R_list_generated, G_list_generated, B_list_generated = list(), list(), list()

# Appending each element of RGB to their respective lists
for RGB_tuple in values_list:
    R_list_generated.append(RGB_tuple[0])
    G_list_generated.append(RGB_tuple[1])
    B_list_generated.append(RGB_tuple[2])

# columns in csv file
columns = [R_list_generated, G_list_generated, B_list_generated]

# using the savetxt from numpy module
np.savetxt("generated.csv", np.transpose(columns), delimiter =", ", fmt ='% s')


# MSE_R_list, MSE_G_list, MSE_B_list = list(), list(), list()

# # Calulating mean square error
# i=0
# for item in range(len(R_list_original)):
#     R_value = pow((R_list_generated[i] - R_list_original[i]), 2)
#     MSE_R_list.append(R_value)

#     G_value = pow((G_list_generated[i] - G_list_original[i]), 2)
#     MSE_G_list.append(G_value)

#     B_value = pow((B_list_generated[i] - B_list_original[i]), 2)
#     MSE_B_list.append(B_value)
#     i = i+1

# MSE_R = sum(MSE_R_list)/len(MSE_R_list)
# MSE_G = sum(MSE_G_list)/len(MSE_G_list)
# MSE_B = sum(MSE_B_list)/len(MSE_B_list)

# # using the savetxt from numpy module
# np.savetxt("mse.csv", [MSE_R, MSE_G, MSE_B], delimiter =", ", fmt ='% s')