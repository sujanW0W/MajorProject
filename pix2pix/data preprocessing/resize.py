from PIL import Image

img = Image.open("C:\\Users\\Shady\\Desktop\\image.png")
width, height = img.size

img = img.resize((256, 256), Image.ANTIALIAS)
img.save('C:\\Users\\Shady\\Desktop\\resized_image.png')

img = Image.open("C:\\Users\\Shady\\Desktop\\resized_image.png")
img = img.resize((width, height), Image.ANTIALIAS)
img.save('C:\\Users\\Shady\\Desktop\\upscaled_image.png')