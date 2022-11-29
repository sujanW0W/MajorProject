# example of loading a pix2pix model and using it for one-off image translation
from keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.image import load_img
from numpy import load
from numpy import expand_dims
from matplotlib import pyplot, image
from PIL import Image
 
# load an image
def load_image(filename, size=(256,256)):
	# img = Image.open(filename)
	# size = img.size
	# load image with the preferred size
	pixels = load_img(filename, target_size=size)
	# convert to numpy array
	pixels = img_to_array(pixels)
	# scale from [0,255] to [-1,1]
	pixels = (pixels - 127.5) / 127.5
	# reshape to 1 sample
	pixels = expand_dims(pixels, 0)
	return pixels

# #save resized image
# img = Image.open("C:\\Users\\Shady\\Desktop\\test_new.png")
# width, height = img.size

# img = img.resize((256, 256), Image.Resampling.LANCZOS)
# img.save('C:\\Users\\Shady\\Desktop\\test.png')

# load source image
src_image = load_image('C:\\Users\\Shady\\Desktop\\test24.jpg')
# src_image = load_image('maskalley/19.jpg')
print('Loaded', src_image.shape)

# load model
model = load_model('C:\\Users\\Shady\\Desktop\\pix2pix\\models\\streetview\\model_044400.h5')

print(model.output_shape[1])

# generate image from source
gen_image = model.predict(src_image)

# scale from [-1,1] to [0,1]
gen_image = (gen_image + 1) / 2.0

image.imsave('C:\\Users\\Shady\\Desktop\\result.png', gen_image[0])

# img = Image.open("C:\\Users\\Shady\\Desktop\\result.png")
# img = img.resize((width, height), Image.Resampling.LANCZOS)
# img.save('C:\\Users\\Shady\\Desktop\\upscaled_image.png')

# plot the image
pyplot.imshow(gen_image[0])
pyplot.axis('off')
pyplot.show()




