#File objects

# f=open('test.txt','r') #r=read,w=write,a=append,r+=read&write

#print(f.mode) #hangi modda açıyoruz, r yazar mesela okuyosak
# print(f.name)

# f.close() #UNUTMA bunu, yoksa durduk yere boş boş şeyler çıkar

with open('test.txt','r') as f: #kendi kendine kapatıyor bu, en iyisi bu yüzden
   # f_contents = f.read()
   # print(f_contents)
   
   # f_contents=f.readline()
   # print(f_contents,end='')
   # f_contents=f.readline()
   # print(f_contents,end='')

   # for line in f:
   #    print(line,end='')

   # f_contents=f.read(30)
   # print(f_contents,end='')

   # size_to_read=7
   # f_contents=f.read(size_to_read)
   # while len(f_contents)>0:
   #    print(f_contents,end='*')
   #    f_contents=f.read(size_to_read)
   #    #print(f.tell())

   size_to_read=7
   f_contents=f.read(size_to_read)
   print(f_contents,end='')
   f.seek(0)
   f_contents=f.read(size_to_read)
   print(f_contents)