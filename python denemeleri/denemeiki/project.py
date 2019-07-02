from flask import Flask,render_template,redirect,url_for,g
import sqlite3, request
app=Flask(__name__)

app.secret_key="1234567890"
app.database="sample.db"

@app.route('/login',methods=['GET','POST'])
def login():
  error=None
  if request.method=='GET':
    if request.form['username']!='admin' or request.form['password']!='admin':
      redirect(url_for('home'))
  return render_template('login.html',error=error)
@app.route('/')
def home():
  g.db=connect_db()
  cur=g.db.execute('select * from posts')
  posts=[dict(title=row[0],description=row[1]) for row in cur.fetchall()]
  g.db.close()
  return render_template('home.html',posts=posts)
def connect_db():
  return sqlite3.connect(app.database)
if __name__=='__main__':
  app.run(debug=True)