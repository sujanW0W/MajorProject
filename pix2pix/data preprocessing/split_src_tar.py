from os import listdir, makedirs
from keras.utils import img_to_array
from keras.utils import load_img
from matplotlib import image
from numpy import asarray


# load all images in a directory into memory
def load_images(path, size=(256,512)):
	src_list, tar_list = list(), list()
	# enumerate filenames in directory, assume all are images
	for filename in listdir(path):
		# load and resize the image
		pixels = load_img(path + filename, target_size=size) # PIL Image
		
        # convert to numpy array
		pixels = img_to_array(pixels) # numpy ndarray
		
		# split into source and target images
		src_img, tar_img = pixels[:, 256:], pixels[:, :256] # numpy ndarray
		
		src_list.append(src_img)
		tar_list.append(tar_img)
        
	return [asarray(src_list), asarray(tar_list)]

# dataset path
path = "C:\\Users\\Shady\\Desktop\\pix2pix\\Data_Test\\"
# load dataset
[src_img, tar_img] = load_images(path)

# scale from [0,255] to [-1,1]
src_img = (src_img - 127.5) / 127.5
tar_img = (tar_img - 127.5) / 127.5

# scale from [-1,1] to [0,1]
src_img = (src_img + 1) / 2.0
tar_img = (tar_img + 1) / 2.0

makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\source\\', exist_ok=True)
makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\target\\', exist_ok=True)

i = 0
for filename in listdir(path):
    image.imsave(f'source/{i}.png', src_img[i])
    image.imsave(f'target/{i}.png', tar_img[i])
    i = i+1

