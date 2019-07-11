function searchYoutube(){
   var apiKey="AIzaSyDCQz5mbY0pS98YNeN7H3ITS3Y5QphdHL8";
   var url="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+keyword+"&key="+apiKey;
   var request=new XMLHttpRequest();
   request.open('GET',url);
   request.onload=function(){
      var data=JSON.parse(request.responseText);
      ListResults(data);
   };
   request.send();
}
window.onload = function() {
  searchYoutube();
}