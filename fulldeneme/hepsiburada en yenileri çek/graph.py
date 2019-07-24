import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import style
import time
import threading

style.use('fivethirtyeight')
fig=plt.figure()
t1=fig.add_subplot(1,1,1)
t2=fig.add_subplot(1,1,1)
t3=fig.add_subplot(1,1,1)
t4=fig.add_subplot(1,1,1)
graphfps=60
graphspeed=1000/graphfps
startTime=time.clock()

def read(j):
   try:
      graph_data=open('Thread-{}.txt'.format(j),'r').read()
   except:
      return
   lines=graph_data.split('\n')
   xs=[]
   ys=[]
   for line in lines:
      if len(line)>1:
         x,y=line.split('-')
         xs.append(x)
         ys.append(float(y))
   return xs,ys

def animate(i):
   try:

      xs,ys=read(1)
      t1.plot(xs,ys,color='red')

      xs1,ys1=read(2)
      t2.plot(xs1,ys1,color='blue')

      xs2,ys2=read(3)
      t3.plot(xs2,ys2,color='green')

      xs3,ys3=read(4)
      t4.plot(xs3,ys3,color='yellow')
   except:
      return
   
ani=animation.FuncAnimation(fig,animate,interval=graphspeed)
plt.show()