from bs4 import BeautifulSoup,SoupStrainer
from jsonListTemplate import classicJsonList
from scrapecategories import scrape_category
import threading
from appendout import append_out
from writeout import write_out
import time
import requests

def scrape_all(link,sort_order):
   thread_name=threading.currentThread().getName()
   write_out(thread_name,'')
   all_categories=[]
   strainer=SoupStrainer('div',class_='footer-middle-left')
   source=requests.get(link).text
   soup=BeautifulSoup(source,'lxml',parse_only=strainer)
   sections=soup.find_all('section')
   section=sections[1].ul
   for li in section:
      a=''
      try:
         a=li.a 
      except: 
         continue
      category_title=a['title']
      category_link=link+a['href']
      items=[]
      category=classicJsonList(category_title,'category',category_link,items)
      all_categories.append(category)
   items_to_delete=[]
   for count,category in enumerate(all_categories):
      items=scrape_category(link,category['link'],category['title'],'alt-category',sort_order)
      if items:category['items']=items
      else:
         items_to_delete.append(count)
      print('count: {} -- current thread: {}'.format(count,thread_name))
      append_out(thread_name,str(count)+'-'+str(time.clock()))
   items_to_delete.sort(reverse=True)
   for i in items_to_delete:
      #print('category is getting deleted {}'.format(all_categories[i]))
      del all_categories[i]
   return all_categories
      