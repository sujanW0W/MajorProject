# Script to merge two images into one horizontally

import sys
from PIL import Image
import os

img_id = 0

listing = os.listdir("C:\\Users\\Shady\\Downloads\\Compressed\\part9_new_cropped\\")    

for file in listing:

    images = [Image.open(x) for x in [f"C:\\Users\\Shady\\Downloads\\Compressed\\part9_new_cropped\\{img_id}.jpg",
        f"C:\\Users\\Shady\\Downloads\\Compressed\\part9_new_mask\\{img_id}.jpg"]]
    widths, heights = zip(*(i.size for i in images))

    total_width = sum(widths)
    max_height = max(heights)

    new_im = Image.new('RGB', (total_width, max_height))

    x_offset = 0

    for im in images:
        new_im.paste(im, (x_offset,0))
        x_offset += im.size[0]

        new_im.save(f"C:\\Users\\Shady\\Downloads\\Compressed\\part9_final\\{img_id}.jpg")

    img_id += 1

# listing = os.listdir("C:\\Users\Shady\Desktop\pix2pix\\alley")    

# for file in listing:

#     images = [Image.open(x) for x in [f'C:\\Users\Shady\Desktop\pix2pix\\alley\\{img_id}.jpg', f'C:\Users\Shady\Desktop\pix2pix\maskalley\\{img_id}.jpg']]
#     widths, heights = zip(*(i.size for i in images))

#     total_width = sum(widths)
#     max_height = max(heights)

#     new_im = Image.new('RGB', (total_width, max_height))

#     x_offset = 0

#     for im in images:
#         new_im.paste(im, (x_offset,0))
#         x_offset += im.size[0]

#         new_im.save(f'C:\\Users\Shady\Desktop\pix2pix\\alley_new\\{img_id}.jpg')

#     img_id += 1