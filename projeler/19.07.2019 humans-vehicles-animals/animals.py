from bs4 import BeautifulSoup
import requests

link='https://lib2.colostate.edu/wildlife/atoz.php?letter=ALL'
source=requests.get(link).text
soup=BeautifulSoup(source,"lxml")

def appendOut(string):
  with open('animalswithimages.txt','w', encoding="utf-8") as wf:
    with open('animalswithimages.txt','a', encoding="utf-8") as af:
      wf.write('')
      af.write(string)

def get_image(imgLink):
   new_source=requests.get(imgLink).text
   new_soup=BeautifulSoup(new_source,"lxml")
   try:
      img=new_soup.find('span',class_="dc-thumb-inner").a.img['src'][:-4]
      splitted_imgs=img.split('url=')
      return splitted_imgs[len(splitted_imgs)-1]
   except:
      try:
         return new_soup.find('span',class_="dc-image").a['href']
      except:
         return 'None'

newList='var animals=['
for names in soup.find_all('table',class_='names'):
   for name in names.find_all('a'):
      full_name=str(name.decode_contents())
      if full_name!='unavailable':
         image=get_image('https://lib2.colostate.edu/wildlife/'+name['href'])
         newList+="\n{\n\"name\":\""+full_name+"\",\n"
         newList+= "\"image\":\""+image+"\"\n},"


appendOut(newList+'\n]')






