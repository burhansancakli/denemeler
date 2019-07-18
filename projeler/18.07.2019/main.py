from flask import Flask, render_template,url_for,request
import matplotlib.pyplot as plt
import wave, struct, math, random
import numpy as np
app=Flask(__name__)

@app.route('/')
def home():
   w=wave.open('puh.wav','r')
   # allWaves=''
   # for i in range(w.getnframes()):
   #    frame=w.readframes(i)
   #    allWaves+=str(frame)
   # print('number of channels: '+str(w.getnchannels()))
   # print('framerate/samplingFrequency: '+str(w.getnframes()))
   # print('sample-width-in-bytes: '+str(w.getsampwidth()))
   # print(w.tell())
   signal = w.readframes(-1)
   signal = np.fromstring(signal, 'Int16')
   plt.figure(1)
   plt.title('Signal Wave...')
   plt.plot(signal)
   plt.show()
   return render_template("home.html")

# w=wave.open('music.wav','r')
# w=wave.open('puh.wav','r')
# for i in range(w.getnframes()):
#    frame=w.readframes(i)
#    print(frame)

if __name__==('__main__'):
   app.run(debug=True)