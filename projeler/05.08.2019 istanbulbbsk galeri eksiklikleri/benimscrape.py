# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import requests


def appendOut(string):
  with open('linkler.txt','w', encoding="utf-8") as wf:
    with open('linkler.txt','a', encoding="utf-8") as af:
      wf.write('')
      af.write(string)

garip_kesme_isareti="’"
source=False
site='http://eski.istanbulbbsk.org/galeri.php?sf='
newList='var haberler=['
sayfaSayisi=39
for i in range(1,sayfaSayisi+1):
   source = requests.get(site+str(i))
   if source:
      soup=BeautifulSoup(source.content,'lxml',from_encoding="utf-8").find_all('div',class_='clearfix')[0].find_all('div',class_='clearfix',recursive=False)[1]
      for count,haber in enumerate(soup.find_all('div',class_='g-galeriler')): 
         newList+= "\n{\n\"baslik\":"+ "\"" +haber.find('div',class_='g-galeriler-adi').decode_contents().replace('"','\\"').replace(garip_kesme_isareti,"'").replace('`',"'")+"\",\n"
         #newList+= "\"resim\":"+ "\"" +haber.div.div.find('div',class_='g-thumgs')['coverimg']+"\",\n"
         if haber.div.div.a.div:
            newList+= "\"resim\":"+ "\"" +'http://eski.istanbulbbsk.org/'+haber.div.div.a.div['coverimg'][0:-6]+"\",\n"
         else:
            newList+= "\"resim\":"+ "\"" +'none'+"\",\n"
         newList+= "\"link\":" + "\"http://eski.istanbulbbsk.org/"+haber.div.div.a['href']+"\"\n}"
         if i!=sayfaSayisi or count != len(soup.find_all('div',class_='haberbaslik'))-1:
            newList+=","
appendOut(newList+'\n]')