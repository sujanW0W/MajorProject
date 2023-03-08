# Script to add random blurred spots in image
from random import randint
from PIL import Image
import numpy as np      
import os
from os import makedirs
import cv2

img_id = 0

makedirs("D:\\Dataset\\part10_new_blurred", exist_ok=True)

listing = os.listdir("D:\\Dataset\\part10_new\\")    
for file in listing:
    # Read in image
    image = cv2.imread(f"D:\\Dataset\\part10_new_cropped\\{img_id}.jpg")

    # Create ROI coordinates
    topLeft = (randint(100,500), randint(100,500))

    bottomRight = (topLeft[0]+160, topLeft[1]+160 )

    x, y = topLeft[0], topLeft[1]
    w, h = 160, 160

    x_lower_limit = randint(0,640)
    y_lower_limit = randint(0,640)

    # Grab ROI with Numpy slicing and blur
    ROI = image[y:y+h, x:x+w]
    blur = cv2.GaussianBlur(ROI, (51,51), 0) 
    
    # Insert ROI back into image
    image[y:y+h, x:x+w] = blur

    # cv2.imshow('image', image)

    cv2.imwrite(f"D:\\Dataset\\part10_new_blurred\\{img_id}.jpg", image)
    img_id += 1

