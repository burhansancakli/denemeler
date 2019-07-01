from flask import Flask, render_template
app=Flask(__name__)

@app.route('/',methods=['GET','POST'])
def getLink():
   return render_template('getLink.html')

if __name__==('__main__'):
   app.run(debug=True)