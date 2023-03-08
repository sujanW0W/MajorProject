import cv2
import numpy as np

image = cv2.imread('C:\\Users\\Shady\\Desktop\\generated.png')
sharpen_kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
sharpen = cv2.filter2D(image, -1, sharpen_kernel)

cv2.imshow('sharpen', sharpen)
cv2.imwrite('result_sharpened.png', sharpen)
cv2.waitKey()
