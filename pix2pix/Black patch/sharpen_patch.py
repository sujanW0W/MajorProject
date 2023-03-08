import cv2
import numpy as np
from PIL import Image

# read source image with black patch
img = cv2.imread('C:\\Users\\Shady\\Desktop\\resized_test.jpg')

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
    if area > 1000:
        cv2.drawContours(result, [c], -1, (0, 0, 255), 2)
        black_patch = c

black_patch_list = list()
black_patch_list = black_patch[0].tolist()

x_lower_limit = black_patch_list[0][1] # width
y_lower_limit = black_patch_list[0][0] # height

print(x_lower_limit, y_lower_limit)

# read generated image
img2 = cv2.imread('C:\\Users\\Shady\\Desktop\\generated.png')

img_arr = np.array(img2)

# Sharpening the pixels
sharpen_kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
sharpen = cv2.filter2D(img_arr[x_lower_limit : x_lower_limit+50, y_lower_limit : y_lower_limit+50], -1, sharpen_kernel)

img_arr[x_lower_limit : x_lower_limit+50, y_lower_limit : y_lower_limit+50] = sharpen

cv2.imshow('Sharpened', img_arr)
cv2.imwrite('C:\\Users\\Shady\\Desktop\\result_sharpened.png', img_arr)

cv2.waitKey(0)
cv2.destroyAllWindows()