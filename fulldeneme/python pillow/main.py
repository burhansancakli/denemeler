from PIL import Image, ImageFilter,ImageChops
import os

image1=Image.open('img1.jpg')
image2=Image.open('img2.jpg')
i = 0
floati=0.0
while i <= 100:
   newimage=ImageChops.blend(image1,image2, floati)
   newimage.save('./modified/modifiedimg{}.jpg'.format(i))
   floati+=0.1
   i+=1

# image1=Image.open('img1.jpg')
# image1.filter(ImageFilter.GaussianBlur(15)).save('img1_blur.jpg')

# image1=Image.open('img1.jpg')
# image1.rotate(90).save('img1_rotated.jpg')
# image1.convert(mode='L').save('img1_blackandwhite.jpg')



#3 # size_300= (300,300)

# for f in os.listdir('.'):
#    if f.endswith('.jpg'):
#       i=Image.open(f)
#       fn,fext=os.path.splitext(f)
#       i.thumbnail(size_300)
#       i.save('300/{}_300{}'.format(fn,fext))


#2 # for f in os.listdir('.'):
#    if f.endswith('.jpg'):
#       i=Image.open(f)
#       fn,fext=os.path.splitext(f)
#       i.save('./png/{}.png'.format(fn))


#1 # image1= Image.open('img/img4.jpg')
# image1.show()