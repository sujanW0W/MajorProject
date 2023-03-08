from PIL import Image

# img = Image.open("C:\\Users\\Shady\\Desktop\\test.jpg")
# width, height = img.size

# img = img.resize((256, 256), Image.Resampling.LANCZOS)
# img.save('C:\\Users\\Shady\\Desktop\\resized_test.jpg')

img = Image.open("C:\\Users\\Shady\\Desktop\\original.png")
width, height = img.size

img = img.resize((256, 256), Image.Resampling.LANCZOS)
img.save('C:\\Users\\Shady\\Desktop\\resized_original.png')

# img = Image.open("C:\\Users\\Shady\\Desktop\\resized_test.jpg")

# img = img.resize((width, height), Image.LANCZOS)
# img.save('C:\\Users\\Shady\\Desktop\\upscaled_image.png')