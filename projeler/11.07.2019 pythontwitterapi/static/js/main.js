function removeAllElements(){
   var parent = document.getElementById("mainContainer");
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
}
function ControlChanges(){
   var searchtext=document.getElementById("searchtext").value.trim();
   if(searchtext==''){removeAllElements();return;}
   $.getJSON('../../_get_tweets', {
      searchtext: searchtext
   }, function(data) {
      ListResults(data.tweets);
   });
   return false;
}
   

// function ControlChanges(){
//    var searchtext=document.getElementById("searchtext").value.trim();
//    if(searchtext==''){return}
// }
function ListResults(data){
   var searchtext=document.getElementById("searchtext").value.trim();
   if(searchtext!=data[0]){return}
   removeAllElements();
   for(var i = data.length-1; i>=1;i--){
      var div = document.createElement("div");
      div.style.width = "auto";
      div.style.height = "auto";
      div.style.border = "2px solid red";
      div.style.color = "black";
      div.innerHTML = 'username: '+data[i].user.name+'<br>'+'tweet: '+data[i].text;
      document.getElementById("mainContainer").appendChild(div);     
   }
   
}