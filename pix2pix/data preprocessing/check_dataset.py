# load the prepared dataset
from numpy import load
from matplotlib import pyplot
from PIL import Image

# load the dataset
data = load('C:\\Users\\Shady\\Desktop\\pix2pix\\streetview_256_1k.npz')
src_images, tar_images = data['arr_1'], data['arr_0']
print('Loaded: ', src_images.shape, tar_images.shape)

# plot source images
n_samples = 3
for i in range(n_samples):
	pyplot.subplot(2, n_samples, 1 + i)
	pyplot.axis('off')
	pyplot.imshow(src_images[i].astype('uint8'))
# plot target image
for i in range(n_samples):
	pyplot.subplot(2, n_samples, 1 + n_samples + i)
	pyplot.axis('off')
	pyplot.imshow(tar_images[i].astype('uint8'))
pyplot.show()