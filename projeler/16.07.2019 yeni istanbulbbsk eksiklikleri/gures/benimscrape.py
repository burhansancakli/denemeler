from bs4 import BeautifulSoup
import requests


def appendOut(string):
  with open('linkler.txt','w', encoding="utf-8") as wf:
    with open('linkler.txt','a', encoding="utf-8") as af:
      wf.write('')
      af.write(string)

source=False
site='http://eski.istanbulbbsk.org/brans.php?k=5&sf='
newList='var haberler=['
sayfaSayisi=81
for i in range(1,sayfaSayisi+1):
   source = requests.get(site+str(i))
   if source:
      soup=BeautifulSoup(source.content,'lxml',from_encoding="utf-8")
      for count,haber in enumerate(soup.find_all('div',class_='haberbaslik')): 
         newList+= "\n{\n\"baslik\":"+ "\"" +haber.a.string.replace('"','\\"')+"\",\n"
         newList+= "\"link\":" + "\"http://eski.istanbulbbsk.org/"+haber.a['href'].replace('"','\\"')+"\"\n}"
         if i!=sayfaSayisi or count != len(soup.find_all('div',class_='haberbaslik'))-1:
            newList+=","
appendOut(newList+'\n]')