from bs4 import BeautifulSoup
import requests

def appendOut(string):
  with open('tameanimals.txt','w', encoding="utf-8") as wf:
    with open('tameanimals.txt','a', encoding="utf-8") as af:
      wf.write('')
      af.write(string)

newList='var tameanimals=['
template_link='http://alltameanimals.com/search.php?cid='
for i in range(1,7):
   source=requests.get(template_link+str(i)).text
   soup=BeautifulSoup(source,"lxml")
   for item in soup.find_all('div',class_='item'):
      image='http://alltameanimals.com/'+item.a['href']
      name=item.span.decode_contents()
      newList+= "\n{\n\"name\":\""+name+"\",\n"
      newList+= "\"image\":\""+image+"\"\n},"
appendOut(newList+'\n]')



# newList='var tameanimals=['
# for names in soup.find_all('table',class_='names'):
#    for name in names.find_all('a'):
#       full_name=str(name.decode_contents())
#       if full_name!='unavailable': 
#          newList+= "\n{\n\"name\":\""+full_name+"\"\n},"

# appendOut(newList+'\n]')
