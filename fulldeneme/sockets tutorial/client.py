import socket
import time
HEADERSIZE=10
BUFFERSIZE=4096

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #af inet, ip sormak gibi bişi
s.connect((socket.gethostname(),1235)) #aynı makinede değilsen socket.gethostname() yazmıyorsun sanırım bağlancağın ipi yazıyorusn

while True:
   currentmsglen=0
   new_msg=True
   while True:
      msg=s.recv(BUFFERSIZE)
      if new_msg:
         print(f"new message length: {msg[:HEADERSIZE]}")
         msglen=int(msg[:HEADERSIZE])
         with open('new_data.txt', 'w',encoding="utf-8") as wf:
            msg=wf.write('')
            with open('new_data.txt', 'a',encoding="utf-8") as af:
               af.write(str(msg))
               #af.write(str(msg).decode("utf-8"))
         currentmsglen+=BUFFERSIZE
         new_msg=False
      elif currentmsglen-HEADERSIZE>=msglen:
         print("full msg recvd")
         currentmsglen=0
         new_msg=True
         # full_msg='' #yenisini almaya hazır olcaz
#print(full_msg)
      else:
         #full_msg += msg.decode("utf-8")
         with open('new_data.txt', 'a',encoding="utf-8") as myfile:
            myfile.write(str(msg))
            #myfile.write(str(msg).decode("utf-8"))
      