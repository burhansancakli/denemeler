function searchYoutube(keyword){
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


var searchDivList=[]

function addElement(){

}

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
   searchYoutube(searchtext);
   // var data = searchYoutube(searchtext);
   // if (data){
   //    var youtubeStandartLink='https://www.youtube.com/watch?v=';
   //    for(var i = data.items.length-1; i>=0;i--){
   //       var div = document.createElement("div");
   //       div.style.width = "100px";
   //       div.style.height = "50px";
   //       div.style.background = "red";
   //       div.style.color = "white";
   //       div.innerHTML = youtubeStandartLink+searchtext[i].id.videoId;
   //       document.getElementById("mainContainer").appendChild(div);   
   //    }
   // }

   // for(var i = searchtext.length-1; i>=0;i--){
   //    var div = document.createElement("div");
   //    div.style.width = "100px";
   //    div.style.height = "100px";
   //    div.style.background = "red";
   //    div.style.color = "white";
   //    div.innerHTML = searchtext[i];
   //    document.getElementById("mainContainer").appendChild(div);   
   // }
}

// const $source = document.querySelector('#source');
// const $result = document.querySelector('#result');

// const typeHandler = function(e) {
//   $result.innerHTML = e.searchtext.value;
// }

// $source.addEventListener('input', typeHandler) // register for oninput

function ListResults(data){
   if(data==null){return;}
   var youtubeStandartLink='https://www.youtube.com/watch?v=';
   console.log(data);
   for(var i = data.items.length-1; i>=0;i--){
      var idVideo=data.items[i].id.videoId;
      if(idVideo!=null){
         var div = document.createElement("div");
         div.style.width = "auto";
         div.style.height = "50px";
         div.style.background = "red";
         div.style.color = "white";
         div.innerHTML = youtubeStandartLink+idVideo;
         document.getElementById("mainContainer").appendChild(div);     
      }
      
   }
}