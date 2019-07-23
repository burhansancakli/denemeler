from bs4 import BeautifulSoup,SoupStrainer
from jsonListTemplate import classicJsonList
from scrapealtcategories import scrape_alt_categories
import requests

def scrape_category(baselink,link,title,type,sort_order):
   strainer=SoupStrainer('ul',class_='items')
   source=requests.get(link).text
   soup=BeautifulSoup(source,'lxml',parse_only=strainer)
   linkList=[]
   for li in soup.find_all('li'):
      jsonList=classicJsonList(li['title'],type,baselink+li.a['href'],[])
      linkList.append(jsonList)
   alt_category_to_delete=[]
   for count,alt_category in enumerate(linkList):
      items=scrape_alt_categories(baselink,alt_category['link']+sort_order)
      if items:
         alt_category['items']=items
      else:
         alt_category_to_delete.append(count)
   alt_category_to_delete.sort(reverse=True)
   for i in alt_category_to_delete:
      #print('alt-category is getting deleted: {}'.format(linkList[i]))
      del linkList[i]
   return linkList