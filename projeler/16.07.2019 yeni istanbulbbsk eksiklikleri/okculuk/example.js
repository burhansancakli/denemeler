var haberler=[
{
"baslik":"Yeşim Bostan’dan altın madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9061"
},
{
"baslik":"Yeşim Bostan Açık Hava Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9007"
},
{
"baslik":"Yeşim Bostan Avrupa ikincisi oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8983"
},
{
"baslik":"15 Temmuz Şehitleri Okçuluk Türkiye Kupası sona erdi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8934"
},
{
"baslik":"Gençler Kadetler Türkiye Şampiyonasında 5. Olduk",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8887"
},
{
"baslik":"Dünya Kupası 2. Ayakta altın madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8876"
},
{
"baslik":"Makaralı Yay Mix takımımız üçüncü oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8838"
},
{
"baslik":"Doğan Hancı Türkiye Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8792"
},
{
"baslik":"Yeşim Bostan Türkiye Kupası ikincisi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8785"
},
{
"baslik":"Başkan Uysal Yeşim Bostan’ı ödüllendirdi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8744"
},
{
"baslik":"Yeşim Bostan Çiçeklerle karşılandı",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8743"
},
{
"baslik":"Yeşim Bostan Dünya İkincisi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8739"
},
{
"baslik":"Yeşim Bostan’dan Avrupa rekoru",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8735"
},
{
"baslik":"Yeşim Bostan gümüş  madalyayla dönüyor",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8685"
},
{
"baslik":"2018 Salon Türkiye Şampiyonası sona erdi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8668"
},
{
"baslik":"Yeşim Bostan makaralı yayda 1. Oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8646"
},
{
"baslik":"Makaralı Yay Takımımız İstanbul 2.’si",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8628"
},
{
"baslik":"Yeşim Bostan Türkiye kupası şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8577"
},
{
"baslik":"Yeşim Bostan Dünya İkincisi oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8565"
},
{
"baslik":"Okçularımız Mix’te Türkiye ikincisi",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8528"
},
{
"baslik":"Yeşim Bostan makaralı yay’da Dünya 3.sü",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8519"
},
{
"baslik":"Okçuluk Kadetlerde 5.bitirdik",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8473"
},
{
"baslik":"Klasik Yay Kategorisi’nde dereceye giremedik",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8121"
},
{
"baslik":"Minik Okçularımız İstanbul 3.’sü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8018"
},
{
"baslik":"Minik Okçularımız Türkiye 9.’su",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8010"
},
{
"baslik":"Klasik Yay Bayan takımımız 12. oldu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7941"
},
{
"baslik":"Minik Okçularımız Zafer Kupası’na katıldı..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7829"
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