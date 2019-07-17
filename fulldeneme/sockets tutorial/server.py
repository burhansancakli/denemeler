import socket
import time

HEADERSIZE=10

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #af inet, ip sormak gibi bişi
s.bind((socket.gethostname(),1235)) #kullanılmayan bi port almalısın
s.listen(5) #çok fazla data birikirse gönderilen, queue 5 e kadar olcak, sanırım

while True:
   clientsocket,address=s.accept()
   print(f"Connection from {address} has beeb established xd")
   msg=''
   with open('data.txt', 'r',encoding="utf-8") as myfile:
      msg=myfile.read()
   msg=f'{len(msg):<{HEADERSIZE}}'+msg #header büyüklüğü her zaman bufferdan büyük olmalı
   clientsocket.send(msg.encode("utf-8"))
   #clientsocket.close()
   
   while True:
      time.sleep(3)
      #msg=f"the time is! {time.time()}"
      #msg=f'{len(msg):<{HEADERSIZE}}'+msg
      #clientsocket.send(bytes(msg,"utf-8"))