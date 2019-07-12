/*$('#btn1').click(function(){
   alert('button clicked');
});
$('#btn1').on('click',function(){
   alert('button clicked');
});*/
$('#btn1').click(function(){
   $('.para1').toggle();
});

$('#btn1').hover(function(){
   $('.para1').toggle();
});
/*$('#btn1').on('mousenter',function(){
   $('.para1').toggle();
});
$('#btn1').on('mouseleave',function(){
   $('.para1').toggle();
});*/

$('#btn1').on('mousemove',function(){
   $('.para1').toggle();
});

$('#btn1').on('mousedown',function(){
   $('.para1').toggle();
});
$('#btn1').on('mouseup',function(){
   $('.para1').toggle();
});
$('#btn1').click(function(e){
   console.log(e);
   console.log(e.currentTarget.id);
});
$('#btn1').on('mousemove',function(e){
   console.log('Coords: Y: '+e.clientY+' X: '+e.clientX);
});
/*$('document').on('mousemove',function(e){
   console.log('Coords: Y: '+e.clientY+' X: '+e.clientX);
});*/
$(document).on('mousemove',function(e){
   /*$('#coords').append('Coords: Y: '+e.clientY+' X: '+e.clientX)*/
   $('#coords').html('Coords: Y: '+e.clientY+' X: '+e.clientX)
});
$('input').focus(function(){
   //alert('Focus');
   //$('input#name').css('background','pink');//bu çoğu yüzünden yine onun pembe olmasına neden olur, this dersen her objenin kendisi pink olur
   $(this).css('background','pink');
});
$('input').blur(function(){
   $(this).css('backgorund','white');
});
$('input').keyup(function(e){
   console.log(e.target.value);
});

$('select#gender').change(function(){
   alert(e.target.value);
});

$('#form').submit(function(e){
   e.preventDefault(); //prevent page from refreshing
   var name = $('input#name').val();
   console.log('submitted (not actually, if it was actually submitting, you wouldnt be able to see this log because it would get cleaned instantly when the page is refreshed');
   console.log(name);
});