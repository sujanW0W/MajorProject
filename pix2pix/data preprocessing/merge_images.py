# Script to merge two images into one horizontally
import sys
from PIL import Image
import os
from os import makedirs


img_id = 0

makedirs("D:\\Dataset\\part10_final", exist_ok=True)

listing = os.listdir("D:\\Dataset\\part10_new_cropped\\")    

for file in listing:

    images = [Image.open(x) for x in [f"D:\\Dataset\\part10_new_cropped\\{img_id}.jpg",
        f"D:\\Dataset\\part10_new_blurred\\{img_id}.jpg"]]
    widths, heights = zip(*(i.size for i in images))

    total_width = sum(widths)
    max_height = max(heights)

    new_im = Image.new('RGB', (total_width, max_height))

    x_offset = 0

    for im in images:
        new_im.paste(im, (x_offset,0))
        x_offset += im.size[0]

        new_im.save(f"D:\\Dataset\\part10_final\\{img_id}.jpg")

    img_id += 1
