# Script to rename filenames of dataset
import os
import uuid


folder = "C:\\Users\\Shady\\Desktop\\pix2pix\\target_9"
# for count, filename in enumerate(os.listdir(folder)):
#     dst = f"{str(count)}.jpg"
#     src =f"{folder}/{filename}" 
#     dst =f"{folder}/{dst}"
        
#     os.rename(src, dst)

i = 9009
# Rename filenames to random ones
for count, filename in enumerate(os.listdir(folder)):
    # file_name = uuid.uuid4().hex
    file_name = i

    src = f"{folder}/{str(count)}.png"
    dst =f"{folder}/{file_name}.png" 
    
    i = i+1
    os.rename(src, dst)