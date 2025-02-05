from flask import Flask,render_template,request,url_for,jsonify
app=Flask(__name__)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/_add_numbers')
def add_numbers():
    a = request.args.get('a', 0, type=int)
    b = request.args.get('b', 0, type=int)
    return jsonify(result=a + b)

if __name__==('__main__'):
   app.run(debug=True)