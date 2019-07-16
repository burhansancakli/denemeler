var haberler=[
{
"baslik":"Daniyar İsmayilov Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8756"
},
{
"baslik":"Haltercimiz Umut Çelik Türkiye 2.’si…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8507"
},
{
"baslik":"Halterde İslam Oyunları rekoru İsmayilov’un",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8480"
},
{
"baslik":"Ahmet Bozan Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8450"
},
{
"baslik":"Haltercimiz Ahmet Bozan Türkiye 2.’si",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8322"
},
{
"baslik":"Ahmet Bozan Gençler Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8225"
},
{
"baslik":"Haltercimiz Eren Can Avrupa 2.'si..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8210"
},
{
"baslik":"Daniyar İsmayilov Olimpiyat 2.’si…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8188"
},
{
"baslik":"Ahmet Bozan Gençler Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8109"
},
{
"baslik":"Daniyar İsmailov Avrupa Şampiyonu..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8090"
},
{
"baslik":"Ahmet Çağdar Türkiye 2.si..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8069"
},
{
"baslik":"Yıldız Haltercimiz Umut Çelik Türkiye 3.’sü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8066"
},
{
"baslik":"Ahmet Bozan Türkiye 2.’si..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8019"
},
{
"baslik":"Danıyar İsmayilov Dünya Şampiyonu..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7925"
},
{
"baslik":"Emrah Aydın Gençler Avrupa Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7870"
},
{
"baslik":"Halter’de kürsü İstanbul BB’nin…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7758"
},
{
"baslik":"Haltercimiz Daniyar Ismayilov Avrupa Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7737"
},
{
"baslik":"Emrah Aydın Avrupa 3.’sü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7736"
},
{
"baslik":"Haltercimiz Ahmet Çağdar Yıldızlar Dünya 3.’sü ",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7731"
},
{
"baslik":"Haltercimiz Daniyar İsmayilov altınları topladı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7689"
},
{
"baslik":"Haltercimiz Emrah Aydın altını kopardı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7685"
},
{
"baslik":"Haltercimiz Ahmet Çağdar Türkiye Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7654"
},
{
"baslik":"Haltercimiz Ahmet Bozan Türkiye 2.’si….",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7621"
},
{
"baslik":"Haltercimiz Daniyar İsmayilov Türkiye Şampiyonu….",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7617"
},
{
"baslik":"Haltercimiz Emrah Aydın Türkiye Şampiyonu….",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7616"
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