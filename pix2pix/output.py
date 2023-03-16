# example of loading a pix2pix model and using it for one-off image translation
from keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from tensorflow.keras.preprocessing.image import load_img
from numpy import load
from numpy import expand_dims
from matplotlib import pyplot, image
from PIL import Image

import sys
import time

# load an image


def load_image(filename, size=(256, 256)):
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


# load source image
src_image = load_image(sys.argv[1])
print(type(src_image))
print('Loaded', src_image.shape)

# load model

model = load_model('D:\\MajorProject\\MajorProject\\pix2pix\\model_012500_2.0')


# generate image from source
gen_image = model.predict(src_image)

# scale from [-1,1] to [0,1]
gen_image = (gen_image + 1) / 2.0

timeSuffix = str(time.time()).replace('.', '-')

image.imsave(
    # f'D:\\MajorProject\\MajorProject\\pix2pix\\{timeSuffix}-result.jpg', gen_image[0]
    f'D:\\MajorProject\\MajorProject\\Complete Frontend\\public\\resultImages\\{timeSuffix}-result.jpg', gen_image[0]
)


# plot the image
pyplot.imshow(gen_image[0])
pyplot.axis('off')
# pyplot.show()

# print(f"D:/MajorProject/MajorProject/pix2pix/{timeSuffix}-result.jpg")
print(f"{timeSuffix}-result.jpg")
