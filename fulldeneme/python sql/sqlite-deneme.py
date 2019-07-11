import sqlite3
import time
import datetime
import random
conn = sqlite3.connect("tutorial.db")
c = conn.cursor()

def create_table():
   c.execute("CREATE TABLE IF NOT EXISTS Personel(no INTEGER PRIMARY KEY AUTOINCREMENT, isimSoyisim TEXT NOT NULL, maas REAL, kayitTarihi TEXT NOT NULL, adres TEXT)")
def data_read():
   c.execute("SELECT * FROM Personel")
   for personel in c.fetchall():
      print(personel)
def data_entry(isimSoyisim,maas,adres):
   unix = time.time()
   date = str(datetime.datetime.fromtimestamp(unix).strftime("%Y-%M-%D %H:%M:%S"))
   if not maas:
      maas = round(random.uniform(3000,15000), 2)
   if adres:
      c.execute("INSERT INTO Personel(isimSoyisim,maas,kayitTarihi,adres) VALUES(?,?,?,?)",(isimSoyisim,maas,date,adres))
   else:
      c.execute("INSERT INTO Personel(isimSoyisim,maas,kayitTarihi) VALUES(?,?,?)",(isimSoyisim,maas,date))
   conn.commit()

def update_table():
   c.execute("UPDATE Personel SET maas = 13000 WHERE isimSoyisim LIKE '%selam%'")
   conn.commit()

def delete_from_table():
   c.execute("DELETE FROM Personel WHERE maas<=3000")

#create_table()
#data_entry("mert güngördü",3000,False)
#update_table()
#delete_from_table()
data_read()


c.close()
conn.close()