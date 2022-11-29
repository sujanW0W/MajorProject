# Script to rename filenames of dataset

import os
import uuid

folder = "C:\\Users\\Shady\\Downloads\\Compressed\\Data"
# folder = "C:\\Users\Shady\Desktop\pix2pix\\alley"
for count, filename in enumerate(os.listdir(folder)):
    dst = f"{str(count)}.jpg"
    src =f"{folder}/{filename}" 
    dst =f"{folder}/{dst}"
        
    os.rename(src, dst)


# for count, filename in enumerate(os.listdir(folder)):
#     name = uuid.uuid4().hex
#     dst = f"{str(name)}.jpg"
#     src =f"{folder}/{filename}" 
#     dst =f"{folder}/{dst}"
        
#     os.rename(src, dst)