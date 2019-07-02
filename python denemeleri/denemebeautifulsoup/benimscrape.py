from bs4 import BeautifulSoup
import requests

liste='https://www.youtube.com/playlist?list=PLn_WMvP7ZVZy7yFJ42Y5VoS4u1KLKSDNB'
source=requests.get(liste).text
soup=BeautifulSoup(source,'lxml')

def appendOut(string):
  with open('linkler.txt','w') as wf:
    with open('linkler.txt','a') as af:
      wf.write('')
      af.write(string)

newListe=''
for video in soup.find_all('a',class_='pl-video-title-link yt-uix-tile-link yt-uix-sessionlink spf-link'):
  link = video['href']
  newListe+="https://www.youtube.com"+link+'\n'
appendOut(newListe.strip())

#OLDU LANNNN :DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD