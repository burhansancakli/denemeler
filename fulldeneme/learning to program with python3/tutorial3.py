def tabloYaz(table,satir,sutun,karakter):
   newTable=[]
   for countSutun,string in enumerate(table):
      newString=''
      for countSatir,character in enumerate(table[countSutun]):
         if sutun==countSutun and satir==countSatir:
            newString==character
         else:
            newString+=character
         newTable.append(newString)
   print(newTable)
   

def tabloyuCiz(tablo):
   print("a b c")
   for count,sutun in enumerate(tablo):
      print(str(count)+sutun)
def tabloCiz():
   print("  a b c")
   table[1][1]='a'
   for count,sutun in enumerate(table):
      print(str(count)+sutun)


table=["- - -",'- - -','- - -']
end =False
while(end == False):
   #tabloCiz()     
   print('hangi satır?(a b c)\n')
   satir=input()
   print('hangi sütun?(0 1 2)\n')
   sutun=input()
   print('x mi o mu?')
   karakter=input()
   if satir == 'a': satir=0
   elif satir=='b':satir=1
   elif satir=='c':satir=2
   sutun*=2
   tabloYaz(table,satir,sutun,karakter) 
   table[sutun][satir]
