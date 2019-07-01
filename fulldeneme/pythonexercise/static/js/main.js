var apiKey="AIzaSyDCQz5mbY0pS98YNeN7H3ITS3Y5QphdHL8";
var url="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUbW18JZRgko_mOGm5er8Yzg&key="+apiKey;
var request= new XMLHttpRequest();
request.open("GET",url);
request.onload=function(){
   var data = JSON.parse(request.responseText);
   for(var i=data.items.length-1;i>=0;i--){
      console.log(data.items[i].snippet.resourceId.videoId+"\n");
   }
}
request.send();