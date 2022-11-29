from math import floor
from PIL import Image
import os
from random import randint


img_id = 0 

listing = os.listdir("C:\\Users\\Shady\\Downloads\\Compressed\\part9_new\\")    

for file in listing:
    img = Image.open(f"C:\\Users\\Shady\\Downloads\\Compressed\\part9_new\\{img_id}.jpg").convert('RGB') 
 
    # Size of the image in pixels
    width, height = img.size
    
    # Setting the points for cropped image
    left = randint(0,480)
    top = randint(150,225)
    right = left+800
    bottom = top+800
    
    img_cropped = img.crop((left, top, right, bottom))

    img_cropped.save(f"C:/Users/Shady/Downloads/Compressed/part9_new_cropped/{img_id}.jpg")  
    img_id += 1