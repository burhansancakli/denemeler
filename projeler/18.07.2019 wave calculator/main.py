from flask import Flask, render_template,url_for,request
app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def home():
   if request.method=='POST':
      period=request.form.get('period',type=int)
      time=request.form.get('time',type=int)
      height=request.form.get('height',type=int)
      angle=request.form.get('angle',type=int)
      try: 
         result=period*time*height*angle
         print('gönderildi: '+str(result))
         return render_template("home.html",result=result)
      except:
         print('it was posted but got error')
         return render_template("home.html",error=True)
   return render_template("home.html")

if __name__==('__main__'):
   app.run(debug=True)