function PostGetParam(){
   var period=$('input[name="period"]').val();
   var time=$('input[name="time"]').val();
   var timeType;
   var height=$('input[name="height"]').val();
   var angle=$('input[name="angle"]').val();
   var minutes = $("input[value='minutes']:checked").val();
   if(period=='' || time=='' || height=='' || angle==''){return;}
   if(minutes){
      timeType="minutes";
   }
   else{
      timeType="seconds";
   }
   //console.log($('form').serialize()) //bunu kullanmak daha hızlı olurdu ama her 2sini de json yapıcam bunda
   var params=[
      {
         period:period,
         time:time,
         timeType:timeType,
         height:height,
         angle:angle
      }
   ]
   params=JSON.stringify(params);
   $.getJSON('/_get_result', {
      params:params
   }, function(data) {
      console.log("returned");
      data=JSON.parse(data);
      var result='<strong>Sonuç: </strong>';
      if(data[0] && data[0].error){
         result='<strong>Error:</strong> Lütfen girdiklerinizi kontrol ediniz ';
      }
      else{
         result='<strong>Sonuç: </strong>'+data[0].result;
      }
      var parent = document.getElementById("mainContainer");
      while(parent.firstChild){
         parent.removeChild(parent.firstChild);
      }
      var div = document.createElement("div");
      div.innerHTML=result;
      parent.appendChild(div);
   });
}