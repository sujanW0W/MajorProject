import glob
import os
import shutil
from os import makedirs


makedirs("D:\\Dataset\\part10_new", exist_ok=True)

src_folder = r"D:\\Dataset\\part10"
dst_folder = r"D:\\Dataset\\part10_new\\"

# move file whose name starts with string '*_1.jpg'
pattern = src_folder + "\*_1.jpg"
for file in glob.iglob(pattern, recursive=True):
    # extract file name form file path
    file_name = os.path.basename(file)
    shutil.move(file, dst_folder + file_name)
    print('Moved:', file)
