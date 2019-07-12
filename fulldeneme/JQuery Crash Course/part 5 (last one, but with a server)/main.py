from flask import Flask,render_template,url_for,request,jsonify
app=Flask(__name__)

jsonList=[
   {
      'name':'brand',
      'password':'123asd123'
   },
   {
      'name':'ulusfark01',
      'password':'123asd123'
   }
]

@app.route('/')
def index():
   return render_template('index.html')
@app.route('/test')
def test():
   return jsonify(jsonList)
if __name__==('__main__'):
   app.run(debug=True)