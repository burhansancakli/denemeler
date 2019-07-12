from flask import Flask,render_template,url_for,request,jsonify
import tweepy
import datetime, time
app=Flask(__name__)




TWITTER_API_KEY = '7Rfwmf3kjDUB2hqd7LX6lT4ip'
TWITTER_API_SECRET_KEY = 'vnoCDrPEbAEwnnMXYhz6kmEnFmt3cqaRBR2AgCGXJIvHXzKGPK'
TWITTER_ACCESS_TOKEN = '721102491740475392-P3WJTDIHBnlVK153h2v02EvvF90Jis6'
TWITTER_ACCESS_TOKEN_SECRET= '4zIqS1TbvyWYEpxlrN5YMM3V6JQpqP8MaQBE0Dyvw6Ef4'



def get_tweets_internal(searchtext):
   auth= tweepy.OAuthHandler(TWITTER_API_KEY,TWITTER_API_SECRET_KEY)
   auth.set_access_token(TWITTER_ACCESS_TOKEN,TWITTER_ACCESS_TOKEN_SECRET)
   api = tweepy.API(auth)
   search_results = api.search(q=searchtext, count=10)
   if search_results:
      jsonList=[]
      for item in search_results:
         jsonList.append(item._json)
      return jsonList

#print('user: '+search_results[0]._json['user']['name'])
#print('tweet text: '+search_results[0]._json['text'])

@app.route('/')
def home():
   return render_template('index.html')

@app.route('/_get_tweets')
def get_tweets():
   searchtext = request.args.get('searchtext', None, type=str)
   tweet_list=get_tweets_internal(searchtext)
   return jsonify(tweets=tweet_list)
  

if __name__==('__main__'):
   app.run(debug=True)

# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#    print(tweet.text)




#for i in search_results:
   #print(i)