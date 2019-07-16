var haberler=[
{
"baslik":"Özel Sporcular Yüzme Şampiyonasında 8 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8819"
},
{
"baslik":"Ekrem Zomp 1 şampiyonasında 13 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8742"
},
{
"baslik":"Lara Samsunlu Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8718"
},
{
"baslik":"Lara Samsunlu 1, Leyla Dila Menzi 2. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8681"
},
{
"baslik":"Lara Samsunlu Çiftlerde Dünya 2. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8575"
},
{
"baslik":"Ali Şirolu Altına doydu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8427"
},
{
"baslik":"Ali Şiroğlu ve Kübra Esen’den 4 birincilik",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8400"
},
{
"baslik":"Lara Samsunlu Şampiyon, Leyla Dila Menzi 2. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8356"
},
{
"baslik":"Zihinsel Engelli Yüzücümüz Ali Şirolu Avrupa 3.’sü",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8164"
},
{
"baslik":"Ali Şiroğlu ve Kübra Esen Şampiyon…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8096"
},
{
"baslik":"Özel Sporcularımız Engel tanımadı..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8020"
},
{
"baslik":"Kürsü Yüzme ve Atletizmde Özel Sporcularımızın..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7874"
},
{
"baslik":"Engelliler Spor Şöleni coşkuyla yapıldı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7865"
},
{
"baslik":"Engelliler Spor Şöleni yapıldı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7775"
},
{
"baslik":"Özel Sporcularımızdan Yüzmede 6 madalya..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7761"
},
{
"baslik":"İrfan Can Eroğlu Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7748"
},
{
"baslik":"Özel Sporcularımızdan kürsüye ambargo…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7739"
},
{
"baslik":"Özel Sporcularımız Atletizm’de Altına koştu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7684"
}
]
window.onload = function () {
   var data="";
   length=haberler.length;
   for(var i = 0; i<length;i++){
      var find=findString(haberler[i].baslik.substring(0,haberler[i].baslik.length-5));
      if (!find){
         data = data + haberler[i].link+'\n';
      }
   }
   console.log(data);
}
var TRange = null;
function findString(str) {
    if (parseInt(navigator.appVersion) < 4) return;
    var strFound;
    if (window.find) {
        // CODE FOR BROWSERS THAT SUPPORT window.find
        strFound = self.find(str);
        if (strFound && self.getSelection && !self.getSelection().anchorNode) {
            strFound = self.find(str)
			console.log('burdan buldu');
        }
        if (!strFound) {
            strFound = self.find(str, 0, 1)
            while (self.find(str, 0, 1)) continue
        }
    
    } 
    
    if (!strFound) 
   {
        return false;
	}
	return true;
}