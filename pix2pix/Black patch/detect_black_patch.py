import cv2
import numpy as np

# read image
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
  
# save result
cv2.imwrite("black_lines_result.jpg", result)

# view result
cv2.imshow("threshold", thresh)
cv2.imshow("morphology", morph)
cv2.imshow("result", result)
cv2.waitKey(0)
cv2.destroyAllWindows()