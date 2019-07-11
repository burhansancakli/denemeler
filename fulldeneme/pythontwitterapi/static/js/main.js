function removeAllElements(){
   var parent = document.getElementById("mainContainer");
   while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
   }
}
function ControlChanges(){
   removeAllElements();
   var searchtext=document.getElementById("searchtext").value.trim();
   if(searchtext==''){return}
   $.getJSON('../../_get_tweets', {
      searchtext: $('input[name="searchtext"]').val()
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
   for(var i = data.length-1; i>=0;i--){
      var div = document.createElement("div");
      div.style.width = "auto";
      div.style.height = "50px";
      div.style.background = "red";
      div.style.color = "white";
      div.innerHTML = 'username: '+data[0].user.name+'<br>'+'tweet: '+data[0].text;
      document.getElementById("mainContainer").appendChild(div);     
   }
}