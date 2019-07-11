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
for i in range(1,82):
   source = requests.get(site+str(i)).text
   if source:
      soup=BeautifulSoup(source,'lxml')
      for count,haber in enumerate(soup.find_all('div',class_='haberbaslik')): 
         newList+= "\n{\n\"baslik\":"+ "\"" +haber.a.string+'\",\n'
         newList+= "\"link\":" + "\"http://eski.istanbulbbsk.org/"+haber.a['href']+"\"\n}"
         if i!=81 or count != len(soup.find_all('div',class_='haberbaslik'))-1:
            newList+=","
appendOut(newList+'\n]')