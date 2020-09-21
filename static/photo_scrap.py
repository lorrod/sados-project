# -*- coding: utf-8 -*-
from PIL import Image


png_path = u'png'

def change_color(dir_to_file, red, green, blue):
  image = Image.open(dir_to_file)
  pixels = image.load()
  for i in range(image.size[0]):  # for every pixel:
    for j in range(image.size[1]):
      #print(pixels[i,j])
      if pixels[i,j] != (0, 0, 0, 0):
        #print(pixels[i,j])
        image.putpixel((i,j), (red, green, blue))
  #print(dir_to_file.split('.')[0]+'_'+str(red)+'-'+str(green)+'-'+str(blue)+'.'+dir_to_file.split('.')[1])
  image.save(dir_to_file.split('.')[0]+'_'+str(red)+'-'+str(green)+'-'+str(blue)+'.'+dir_to_file.split('.')[1])

def compress_image(category_folder_name, width , height, count):

	if count == 1:
		image = Image.open(category_folder_name)
		new_image = image.resize((width, height))
		new_image.save(category_folder_name + '_' + str(width) + '.png')
		return
	for file in files:

		files = os.listdir(category_folder_name)
		print(files)

		image = Image.open(category_folder_name+file)
		new_image = image.resize((width, height))
		new_image.save(category_folder_name+file.split('.')[0]+'_'+str(width)+'.png')
		break

# compress_image('next-button/work/circle-next-v2.png', 24, 24, 1)
# compress_image('next-button/work/circle-next-v2.png', 48, 48, 1)
# compress_image('next-button/work/circle-next-v2.png', 96, 96, 1)

change_color("mobile-phone/mobile-phone-24.png", 154, 140, 123)
change_color("phone/phone-24.png", 154, 140, 123)
