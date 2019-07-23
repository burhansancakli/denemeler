from bs4 import BeautifulSoup,SoupStrainer
import requests
def scrape_alt_categories(baselink,link):
   strainer=SoupStrainer('div',id='productresults')
   list=[]
   source=requests.get(link).text
   soup=BeautifulSoup(source,'lxml',parse_only=strainer)
   product_list=soup.find('ul',class_='product-list')
   if product_list == None: 
      #print('bad item {}'.format(link))
      return False
   for search_item in product_list.find_all('li',class_='search-item'):
      item_link=baselink+search_item.div.a['href']
      list.append(item_link)
   return list