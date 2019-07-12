from flask import Flask,render_template,request,redirect,url_for
import json
app=Flask(__name__)
thePets=[
   {
      "name":"Meowsalot",
      "species":"cat",
      "favFood":"tuna"
   },
   {
      "name":"Barky",
      "species":"dog",
      "favFood":"carrots"
   }
]
@app.route('/',methods=['GET','POST'])
def home():
   error = None
   if request.method=='POST':
      return request.form['searchtext']
   return render_template('index.html',thePets=thePets)

if __name__==('__main__'):
   app.run(debug=True)