import glob
import os
import shutil

src_folder = r"C:\Users\Shady\Downloads\Compressed\part9"
dst_folder = r"C:\Users\Shady\Downloads\Compressed\part9_new\\"

# move file whose name starts with string 'emp'
pattern = src_folder + "\*_1.jpg"
for file in glob.iglob(pattern, recursive=True):
    # extract file name form file path
    file_name = os.path.basename(file)
    shutil.move(file, dst_folder + file_name)
    print('Moved:', file)
