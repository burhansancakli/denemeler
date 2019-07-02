import os

os.chdir("C:/Users/Özgün/Desktop/fileeditdosyaları")

for f in os.listdir():
   f_name,f_ext=os.path.splitext(f)
   f_title,f_course,f_num=f_name.split(' - ')
   f_num=f_num[1:].zfill(2)
   #print('{}-{}-{}{}'.format(f_num,f_course,f_title,f_ext))
   new_name='{}-{}{}'.format(f_num,f_title,f_ext)
   os.rename(f,new_name)
