var haberler=[
{
"baslik":"Tenisçilerimizden 4 madalya...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9417"
},
{
"baslik":"10 Yaş Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9409"
},
{
"baslik":"14 Yaş Hafta Sonu Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9385"
},
{
"baslik":"TTF Club Mega Saray Tenis Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9377"
},
{
"baslik":"Tenisçilerimizden 3 madalya...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9346"
},
{
"baslik":"9 Yaş Kış Kupası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9322"
},
{
"baslik":"10 Yaş Kış Kupası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9308"
},
{
"baslik":"18 Yaş Kış Kupası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9291"
},
{
"baslik":"Tenis Hafta Sonu Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9231"
},
{
"baslik":"Tenis Hafta Sonu Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9224"
},
{
"baslik":"Yusuf Melih Keskin’ten ikincilik...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9212"
},
{
"baslik":"Sarp Çelikten altın madalya...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9171"
},
{
"baslik":"Tenis Turnuva sonuçları",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9024"
},
{
"baslik":"Teniste Sarp ve Poyraz 1.oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8988"
},
{
"baslik":"8, 9, 10 ve 14 yaş Tenis turnuva sonuçları",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8928"
},
{
"baslik":"Tenis Haftasonu turnuvası Taçspor tesislerinde yapıldı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8892"
},
{
"baslik":"Tenis turnuvası sonuçları",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8840"
},
{
"baslik":"Teniste Kuzey Yoleri 1. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8786"
},
{
"baslik":"Sarp Çelik ve Zeynep Kayışlıgil ikinci oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8759"
},
{
"baslik":"Sarp Çelik 2.oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8730"
},
{
"baslik":"Alara İveta Şişman 2. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8716"
},
{
"baslik":"Kış Kupası turnuvası Taçspor tesislerinde yapıldı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8703"
},
{
"baslik":"8-9-10 Yaş turnuvası Taçspor tesislerinde yapıldı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8649"
},
{
"baslik":"12 yaş hafta sonu turnuvasında Sarp Çelik 2. oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8544"
},
{
"baslik":"12 yaş Tenis turnuvasında Sar Çelik ikinci oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8494"
},
{
"baslik":"Yasemin Pehlivan ve Sude Yılmaz grup birincisi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8481"
},
{
"baslik":"Minik Tenisçimiz Sarp Çelikten Gümüş madalya...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8361"
},
{
"baslik":"Kürsü minik Tenisçilerimiz Ali ve Sude'nin...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8203"
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