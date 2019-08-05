# -*- coding: utf-8 -*-
import os
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import json

src_link='https://eski.istanbulbbsk.org'

start_time = time.time()
linkler=''
with open('linkler.txt','r', encoding="utf-8-sig") as file:
    linkler=json.load(file)

eksikler=[]
with open('eksikler.txt','r', encoding="utf-8") as eksikler_src:
    text = eksikler_src.read() 
    lines=text.split('\n')
    for line in lines:
        eksikler.append(line.split(':')[0])
        
#print(linkler[0]['baslik'])

def findInJson(keyword,linkler):
    for item in linkler:
        if item['baslik'].find(keyword)!=-1:
            print('JSON IÇINDE DE VAR')
            return item['resim']
    return

driver=webdriver.Chrome(".\drivers\chromedriver.exe")
#driver=webdriver.Chrome(".\drivers\chromedriver.exe")


driver.set_page_load_timeout("20")
driver.get('https://www.istanbulbbsk.org/galeriler/resim-galerisi/')
while driver.find_element_by_class_name('view-all-button'):
    try:
        driver.find_element_by_class_name('view-all-button').send_keys(Keys.ENTER)
        print('{}'.format(time.time() - start_time))
        
        time.sleep(1)
    except:
        print('boşver')
        break
    if time.time() - start_time>130:
        break
html = driver.page_source
garip_kesme_isareti="’"

def appendOut(string,name):
  with open('{}.txt'.format(name),'w', encoding="utf-8") as wf:
    with open('{}.txt'.format(name),'a', encoding="utf-8") as af:
      wf.write('')
      af.write(string)

newList=[]
soup=BeautifulSoup(html,'lxml').find('ul',class_="gallery-images")
all_links=soup.find_all('a')
for link in all_links:
    image_name=link.find('figure')['style'].split('/')[-1][0:-1]
    if image_name in eksikler!=-1:
        print('BULUNDU   BIRRRRR   TANE')
        title=link['title'].replace('"','\\"').replace(garip_kesme_isareti,"'").replace('`',"'")[4:-4]
        print(title)
        new_image_link=findInJson(title,linkler)
        if new_image_link:
            print('NAYC')
            newList.append({'link':'https://eski.istanbulbbsk.org'+link['href'],'title':link['title'],'resim':new_image_link,'fixed':'true'})
        else:
            newList.append({'link':'https://eski.istanbulbbsk.org'+link['href'],'title':link['title'],'resim':image_name,'fixed':'false'})
    #newList+= "\"resim\":"+ "\"" +haber.div.div.find('div',class_='g-thumgs')['coverimg']+"\",\n"

print(newList)
json_string=json.dumps(newList, ensure_ascii=False)
appendOut(json_string,'tumeksikler')

