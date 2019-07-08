from bs4 import BeautifulSoup
import requests

source=requests.get('http://coreyms.com').text
soup=BeautifulSoup(source,'lxml')
article=soup.find('article')
#headline=article.h2.a.text
#print(headline)
summary=article.find('div',class_='entry-content')