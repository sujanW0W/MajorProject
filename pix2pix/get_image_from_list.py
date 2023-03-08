import pandas as pd
from PIL import Image
import cv2


df_original = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\original_test.csv')
df_generated = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\generated_test.csv')

df_original['RGB_original'] = df_original[['R-original', 'G-original', 'B-original']].apply(tuple, axis=1)
df_generated['RGB_generated'] = df_generated[['R-generated', 'G-generated', 'B-generated']].apply(tuple, axis=1)


RGB_original = list(df_original['RGB_original'])
RGB_generated = list(df_generated['RGB_generated'])


img_original = Image.new('RGB', (51,51))
data = img_original.load()

i = 0
while i<2601:
    for x in range(img_original.size[0]):
        for y in range(img_original.size[1]):
            data[y,x] = RGB_original[i]
            i = i+1

img_original.show()
            
img_generated = Image.new('RGB', (51,51))
data = img_generated.load()

i = 0
while i<2601:
    for x in range(img_generated.size[0]):
        for y in range(img_generated.size[1]):
            data[y,x] = RGB_generated[i]
            i = i+1

img_generated.show()

