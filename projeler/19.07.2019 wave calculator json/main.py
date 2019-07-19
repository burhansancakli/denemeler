from flask import Flask, render_template,url_for,request,jsonify
import json
app=Flask(__name__)

@app.route('/')
def home():
   return render_template("home.html")

@app.route('/_get_result',methods=['GET','POST'])
def _get_result():
   try:
      params=json.loads(request.args.get('params'))[0]
      period=int(params['period'])
      time=int(params['time'])
      timeType=str(params['timeType'])
      height=int(params['height'])
      angle=int(params['angle'])
      if timeType=='minutes': time*=60
      result=str(period*time*height*angle)
      result='[{"result":"'+result+'"}]'
      result=jsonify(result)
      return result
   except:
      return jsonify('[{"error":"error"}]')
if __name__==('__main__'):
   app.run(debug=True)