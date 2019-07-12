$(document).ready(function(){
   /*$('p.para1').css({color:'red',backgorund:'#cc'})
   $('p.para2').addClass('myClass');
   $('p.para2').removeClass('myClass');
   $('#btn1').click(function(){
       $('p.paea2').toggleClass('myClass');
   });
   $('#myDiv').text('hello wordl');
   $('#myDiv').html('<h3>hello World</h3>');
   //alert($('#myDiv').text());

   $('ul').append('<li>Append List item</li>');
   $('ul').prepend('<li>prepend list item</li>');
   $('.para1').appendTo('.para2');
   $('.para1').prependTo('.para2');
   $('ul').before('<h4>Hello</h4>')
   $('ul').after('<h4>World</h4>')
   //$('ul').empty();
   //$('ul').empty();//siliyor
   $('a').attr('target','_blank');//yeni sekme açar
   alert($('a').attr('href'));
   $('a').removeAttr('target'); //gene aynı sekmede açılmasını sağlacak
   $('p').wrap('<h1>');//tüm pleri h1lere koyar
   //$('p').wrapAll('<h1>');//tüm pleri tek bir h1e toplar
   */

   $('#newItem').keyup(function(e){
      var code=e.which;//will get the key code
      if(code==13){ //enter code is 13, so press 'enter' to enter something
         e.preventDefault();
         $('ul').append('<li>'+e.target.value+'</li>');
      }
   });

   /*var myArr=['Brad','Kelly','Nate','Jose']
   $.each(myArr,function(i,val){
      $('#users').append('<li>'+val+'</li>');
   });*/
   
   var newArr=$('ul#list li').toArray();
   console.log(newArr);
});  