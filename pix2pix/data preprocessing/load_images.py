# load, split and scale the maps dataset ready for training
from os import listdir
from numpy import asarray
from numpy import vstack
from keras.utils import img_to_array
from keras.utils import load_img
from numpy import savez_compressed

# load all images in a directory into memory
def load_images(path, size=(256,512)):
	src_list, tar_list = list(), list()
	# enumerate filenames in directory, assume all are images
	for filename in listdir(path):
		# load and resize the image
		pixels = load_img(path + filename, target_size=size)
		# convert to numpy array
		pixels = img_to_array(pixels)
		# split into source and target images
		src_img, tar_img = pixels[:, :256], pixels[:, 256:]
		src_list.append(src_img)
		tar_list.append(tar_img)
	return [asarray(src_list), asarray(tar_list)]

# dataset path
path = "C:\\Users\\Shady\\Desktop\\pix2pix\\Data_Test\\"
# load dataset
[src_images, tar_images] = load_images(path)
print('Loaded: ', src_images.shape, tar_images.shape)
# save as compressed numpy array
filename = 'streetview_256_test.npz'
savez_compressed(filename, src_images, tar_images)
print('Saved dataset: ', filename)