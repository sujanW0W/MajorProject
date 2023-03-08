from keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.image import load_img
from numpy import expand_dims
from matplotlib import image
from os import makedirs, listdir

 
path = 'C:\\Users\\Shady\\Desktop\\pix2pix\\source\\'
makedirs('C:\\Users\\Shady\\Desktop\\pix2pix\\generated\\', exist_ok=True)

# load an image
def load_image(filename, size=(256,256)):
	# load image with the preferred size
	pixels = load_img(filename, target_size=size)
	# convert to numpy array
	pixels = img_to_array(pixels)
	# scale from [0,255] to [-1,1]
	pixels = (pixels - 127.5) / 127.5
	# reshape to 1 sample
	pixels = expand_dims(pixels, 0)
	return pixels


# load model
model = load_model('C:\\Users\\Shady\\Desktop\\pix2pix\\Results\\Data_256_5k_part2_bs4_ep100\\models\\model_131200')

i = 0
for filename in listdir(path):
    src_image = load_image(path + f'{i}.png')
    # generate image from source
    gen_image = model.predict(src_image)

    # scale from [-1,1] to [0,1]
    gen_image = (gen_image + 1) / 2.0

    image.imsave(f'C:\\Users\\Shady\\Desktop\\pix2pix\\generated\\{i}.png', gen_image[0])
    i = i+1

