# Script to add random black spots in image

from random import randint
from PIL import Image
import numpy as np      
import os

# Opening the image and converting it to RGB color mode IMAGE_PATH => Path to the image
img_id = 0

listing = os.listdir("C:\\Users\\Shady\\Downloads\\Compressed\\part9_new\\")    
for file in listing:
    img = Image.open(f"C:\\Users\\Shady\\Downloads\\Compressed\\part9_new_cropped\\{img_id}.jpg").convert('RGB') 
    img_arr = np.array(img)

    x_lower_limit = randint(0,640)
    y_lower_limit = randint(0,640)

    # Turning the pixel values to black 
    img_arr[x_lower_limit : x_lower_limit+160, y_lower_limit : y_lower_limit+160] = (0, 0, 0)
    
    # Creating an image out of the previously modified array
    img = Image.fromarray(img_arr)
    img.save(f"C:/Users/Shady/Downloads/Compressed/part9_new_mask/{img_id}.jpg")  
    img_id += 1
