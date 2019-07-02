from bs4 import BeautifulSoup
import requests

with open('simple.html') as html_file:
  soup=BeautifulSoup(html_file,'lxml')

#match=soup.title
#print(match.text)

#match=soup.find('div',class_='footer') #karışmasın diye var alttire
#print(match)

#article=soup.find('div',class_='article')
for article in soup.find_all('div',class_='article'):
  headline=article.h2.a.text
  print(headline)
  summary=article.p.text
  print(summary)
  print()#boşluk için