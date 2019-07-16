var haberler=[
{
"baslik":"Dünya Çocukları Buz Pistinde Buluşuyor...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9479"
},
{
"baslik":"Şampiyon İstanbul BBSK...",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9464"
},
{
"baslik":"Türkiye Buz Hokeyi Gençler Ligi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9460"
},
{
"baslik":"23 Nisan Uluslararası Buz Hokeyi Turnuvası",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9427"
},
{
"baslik":"Türkiye Buz Hokeyi Genç Erkekler Ligi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9315"
},
{
"baslik":"Türkiye Buz Hokeyi Genç Erkekler Ligi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9127"
},
{
"baslik":"Minikler namağlup şampiyon…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9087"
},
{
"baslik":"İstanbul BBSK-Kocaeli :11-6",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9043"
},
{
"baslik":"Buz Hokeyinde U14 takımımız Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8907"
},
{
"baslik":"U12 ve U14 Buz Hokeyi İstanbul 2.si oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8870"
},
{
"baslik":"İstanbul BBSK - Kocaeli GHSK :4-2",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8796"
},
{
"baslik":"Buz Hokeyi’ne Altyapı takımlarımız damga vurdu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8496"
},
{
"baslik":"U12 takımımız İstanbul İce Hockey Cup şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8440"
},
{
"baslik":"Buz Hokeyinde Minik ve Yıldızlarımız Türkiye 3.?sü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8176"
},
{
"baslik":"Buz Hokeyi Minik ve Yıldız takımlarımız İl Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8168"
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