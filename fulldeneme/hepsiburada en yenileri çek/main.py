from scrape import scrape_all
import threading 
import json
import os
def export_into_json(siralama,baselink):
   ultimate_list=scrape_all(baselink,siralama)
   file_object=open('{}.json'.format(siralama.split('=')[1]),'w',encoding='utf-8')
   json.dump(ultimate_list,file_object,ensure_ascii=False)
   print('FINISHED: '+'siralama')

def startgraph():
   os.system('python graph.py')

def main_function():
   baselink='https://www.hepsiburada.com'
   enyeni='?siralama=enyeni'
   coksatan='?siralama=coksatan'
   artanfiyat='?siralama=artanfiyat'
   azalanfiyat='?siralama=azalanfiyat'
   
   a=threading.Thread(target=export_into_json,args=(enyeni,baselink,))
   b=threading.Thread(target=export_into_json,args=(coksatan,baselink,))
   c=threading.Thread(target=export_into_json,args=(artanfiyat,baselink,))
   d=threading.Thread(target=export_into_json,args=(azalanfiyat,baselink,))
   e=threading.Thread(target=startgraph,)
   
   
   e.setDaemon(True)
   a.setDaemon(True)
   b.setDaemon(True)
   c.setDaemon(True)
   d.setDaemon(True)

   e.start()
   a.start()
   b.start()
   c.start()
   d.start()

   a.join()
   b.join()
   c.join()
   d.join()
      
   

main_function()


# ultimate_list=[
#  {
#    'title':'bilgisayar',
#    'type':'category',
#    'link':'/gfdsgfd',
#    'items':[
#        {
#           'title':'dizüstü-bilgisayarlar',
#           'type':'alt-category',
#           'link':'/dskmgksdmg',
#           'items':['gfdhfdh','dhgsdfhdfsh','dfhdsfhgfj'] 
#        },
#        {
#           'title':'masaüstü-bilgisayarlar',
#           'type':'alt-category',
#           'link':'/dskmgksdmg',
#           'items':['gfdhfdh','dhgsdfhdfsh','dfhdsfhgfj'] 
#        }
#    ],
#    'title':'makine',
#    'type':'category',
#    'link':'/fdhjmkdfhmn',
#    'items':[
#        {
#           'title':'dizüstü-bilgisayarlar',
#           'type':'alt-category',
#           'link':'/dskmgksdmg',
#           'items':['gfdhfdh','dhgsdfhdfsh','dfhdsfhgfj'] 
#        },
#        {
#           'title':'masaüstü-bilgisayarlar',
#           'type':'alt-category',
#           'link':'/dskmgksdmg',
#           'items':['gfdhfdh','dhgsdfhdfsh','dfhdsfhgfj']
#        }
#    ]
#  }
# ]