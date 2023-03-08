import numpy as np
import matplotlib.pyplot as plt
from skimage.io import imshow, imread
from skimage.color import rgb2yuv, rgb2hsv, rgb2gray, yuv2rgb, hsv2rgb
from scipy.signal import convolve2d
from matplotlib import image


image_name = 'result.png'
dog = imread(image_name)[:,:,:3]
dog_grey = rgb2gray(dog)

# dog = imread('dog.png')
# dog_grey = rgb2gray(dog)

# Sharpen
sharpen = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]])
# Gaussian Blur
gaussian = (1 / 16.0) * np.array([[1., 2., 1.], [2., 4., 2.], [1., 2., 1.]])

def multi_convolver(image, kernel, iterations):
    for i in range(iterations):
        image = convolve2d(image, kernel, 'same', boundary = 'fill', fillvalue = 0)
    return image


def convolver_rgb(image, kernel, iterations = 1):
    img_yuv = rgb2yuv(image)   
    img_yuv[:,:,0] = multi_convolver(img_yuv[:,:,0], kernel, iterations)
    final_image = yuv2rgb(img_yuv)
                               
    fig, ax = plt.subplots(1,2, figsize = (12,8))
    
    ax[0].imshow(image)
    ax[0].set_title(f'Original', fontsize = 20)
    
    ax[1].imshow(final_image)
    ax[1].set_title(f'YUV Adjusted, Iterations = {iterations}', fontsize = 20)
    
    [axi.set_axis_off() for axi in ax.ravel()]
    
    fig.tight_layout()
    
    return final_image

final_image = convolver_rgb(dog, sharpen, iterations = 1)

# image.imsave('C:\\Users\\Shady\\Desktop\\pix2pix\\result_sharpened.png', final_image)

plt.show()