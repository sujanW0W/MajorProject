import cv2
import numpy as np
from os import listdir, makedirs
from PIL import Image
import pandas as pd
from matplotlib import pyplot as plt


makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\original_csv\\', exist_ok=True)
makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\generated_csv\\', exist_ok=True)
makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\RGB_csv\\', exist_ok=True)

def detect_black_patch(i):
    # read image
    img = cv2.imread(f'C:\\Users\\Shady\\Desktop\\pix2pix\\source\\{i}.png')

    # median blur
    median = cv2.medianBlur(img, 5)

    # threshold on black
    lower = (0,0,0)
    upper = (15,15,15)
    thresh = cv2.inRange(median, lower, upper)

    # apply morphology open and close
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3,3))
    morph = cv2.morphologyEx(thresh, cv2.MORPH_OPEN, kernel)
    kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (29,29))
    morph = cv2.morphologyEx(morph, cv2.MORPH_CLOSE, kernel)

    # filter contours on area
    contours = cv2.findContours(morph, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    contours = contours[0] if len(contours) == 2 else contours[1]
    result = img.copy()
    for c in contours:
        area = cv2.contourArea(c)
        if area > 1500:
                cv2.drawContours(result, [c], -1, (0, 0, 255), 2)
                black_patch = c


    black_patch_list = list()
    black_patch_list = black_patch[0].tolist()

    x_lower_limit = black_patch_list[0][0] # width
    y_lower_limit = black_patch_list[0][1] # height

    return(x_lower_limit, y_lower_limit)


def save_RGB_values(k):
    img = Image.open(f'C:\\Users\\Shady\\Desktop\\pix2pix\\target\\{k}.png') 
    pix = img.load()

    values_list = list()
    # Looping to scan image for each pixel value
    i=0
    j=0
    while j<51: # 161 for 800x800 images, 51 for 256x256 images
        while i<51:
            values_list.append(pix[x_lower_limit+i,y_lower_limit+j]) # Get the RGBA Value of the pixel of an image
            i = i+1
        i = 0
        j = j+1

    R_list_original, G_list_original, B_list_original = list(), list(), list()
    # Appending each element of RGB to their respective lists
    for RGB_tuple in values_list:
        R_list_original.append(RGB_tuple[0])
        G_list_original.append(RGB_tuple[1])
        B_list_original.append(RGB_tuple[2])

    # columns in csv file
    columns = ["R_original", "G_original", "B_original"]

    df_original = pd.DataFrame(columns=columns)
    df_original['R_original'] = R_list_original
    df_original['G_original'] = G_list_original
    df_original['B_original'] = B_list_original

    df_original.to_csv(f"C:\\Users\\Shady\\Desktop\\pix2pix\\original_csv\\{k}.csv", index=False, 
                       header=['R_original', 'G_original', 'B_original'])

    # Retriving pixel values from generated image where the black patch is
    img = Image.open(f'C:\\Users\\Shady\\Desktop\\pix2pix\\generated\\{k}.png') 
    pix = img.load()

    values_list = list()
    # Looping to scan image for each pixel value
    i=0
    j=0
    while j<51: # 161 for 800x800 images, 51 for 256x256 images
        while i<51:
            values_list.append(pix[x_lower_limit+i,y_lower_limit+j]) # Get the RGBA Value of the pixel of an image
            i = i+1  
        i = 0
        j = j+1

    R_list_generated, G_list_generated, B_list_generated = list(), list(), list()
    # Appending each element of RGB to their respective lists
    for RGB_tuple in values_list:
        R_list_generated.append(RGB_tuple[0])
        G_list_generated.append(RGB_tuple[1])
        B_list_generated.append(RGB_tuple[2])

    # columns in csv file
    columns = ["R_generated", "G_generated", "B_generated"]

    df_generated = pd.DataFrame(columns=columns)
    df_generated['R_generated'] = R_list_generated
    df_generated['G_generated'] = G_list_generated
    df_generated['B_generated'] = B_list_generated

    df_generated.to_csv(f"C:\\Users\\Shady\\Desktop\\pix2pix\\generated_csv\\{k}.csv", index=False, 
                        header=['R_generated', 'G_generated', 'B_generated'])


def save_AVG_RGB(i):
    df_original = pd.read_csv(f"C:\\Users\\Shady\\Desktop\\pix2pix\\original_csv\\{i}.csv")
    df_generated = pd.read_csv(f"C:\\Users\\Shady\\Desktop\\pix2pix\\generated_csv\\{i}.csv")

    df = pd.DataFrame(columns=['R_diff', 'G_diff', 'B_diff', 'AVG_diff'])

    df['R_diff'] = abs(df_original['R_original'] - df_generated['R_generated'])
    df['G_diff'] = abs(df_original['G_original'] - df_generated['G_generated'])
    df['B_diff'] = abs(df_original['B_original'] - df_generated['B_generated'])

    df['AVG_diff'] = (df['R_diff'] + df['G_diff'] + df['B_diff']) / 3
    # df = df.round().astype({'AVG_diff' : "int"})

    df.to_csv(f"C:\\Users\\Shady\\Desktop\\pix2pix\\RGB_csv\\RGB_diff_{i}.csv", index=False, header=['R_diff', 'G_diff', 'B_diff', 'AVG_diff'])

    #Error less than 13 i.e. 5% margin of 0-255
    margin = 13
    count_RGB = len(df[df['AVG_diff']<margin])
    acc_RGB = count_RGB/2601

    return count_RGB, acc_RGB


path = 'C:\\Users\\Shady\\Desktop\\pix2pix\\source\\'

acc_RGB_list = list()
count_RGB_list = list()

i = 0
for filename in listdir(path):
    x_lower_limit, y_lower_limit = detect_black_patch(i)
    save_RGB_values(i)
    i = i+1


i = 0
for filename in listdir(path):
    count_RGB, acc_RGB = save_AVG_RGB(i)
    count_RGB_list.append(count_RGB)
    acc_RGB_list.append(acc_RGB)
    i = i+1


df_accuracy = pd.DataFrame(columns=['count_RGB', 'acc_RGB'])
df_accuracy['count_RGB'] = count_RGB_list
df_accuracy['acc_RGB'] = acc_RGB_list

avg_RGB = sum(acc_RGB_list)/len(acc_RGB_list)

df_accuracy.to_csv(f"accuracy.csv", index=False, header=['count_RGB', 'acc_RGB'])

print(f"Average accuracy: {avg_RGB}")
print("Done")

