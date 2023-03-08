from math import floor
from PIL import Image
import os
from random import randint
from os import makedirs


makedirs("D:\\Dataset\\part10_new_cropped", exist_ok=True)

img_id = 0 

listing = os.listdir("D:\\Dataset\\part10_new\\")    

for file in listing:
    img = Image.open(f"D:\\Dataset\\part10_new\\{img_id}.jpg").convert('RGB') 
 
    # Size of the image in pixels
    width, height = img.size
    
    # Setting the points for cropped image
    left = randint(0,480)
    top = randint(150,225)
    right = left+800
    bottom = top+800
    
    img_cropped = img.crop((left, top, right, bottom))

    img_cropped.save(f"D:\\Dataset\\part10_new_cropped/{img_id}.jpg")  
    img_id += 1