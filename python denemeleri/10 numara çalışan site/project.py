from flask import Flask,render_template,redirect,url_for,request
app=Flask(__name__)
@app.route('/login',methods=['GET','POST'])
def login():
    error=None
    if request.method=='POST':
        if request.form['username']!='admin' or request.form['password']!='admin':
            error='Invalid credentials. Lorem ipsum dolor sit ame-?!??!?!??!'
        else:
            return redirect(url_for('home'))
    return render_template('login.html',error=error)
@app.route('/home')
def home():
    return render_template('home.html')

if __name__==('__main__'):
    app.run(debug=True)