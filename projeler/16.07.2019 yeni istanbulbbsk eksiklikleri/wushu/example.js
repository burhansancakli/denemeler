var haberler=[
{
"baslik":"İstanbul Şampiyonası’nda 14 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9064"
},
{
"baslik":"Wushu’da 15 Temmuz Kupası Büyükşehir’in…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8942"
},
{
"baslik":"15 Temmuz Şehitler ve Gaziler Kupasında 33 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8933"
},
{
"baslik":"Hüseyin Kaya Gençler Avrupa üçüncüsü oldu.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8869"
},
{
"baslik":"Wushu Minik Yıldızlar İstanbul üçüncüsü",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8828"
},
{
"baslik":"Wushu Genç ve Büyüklerde 11 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8731"
},
{
"baslik":"Wushu miniklerimiz 14 madalyayla dönüyor",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8722"
},
{
"baslik":"Wushu Sanda’da İstanbul Şampiyonu olduk",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8656"
},
{
"baslik":"Minik Yıldız Wushu İl Şampiyonası yapıldı.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8629"
},
{
"baslik":"Wushu’da madalyaları topladık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8506"
},
{
"baslik":"İslam Oyunlarında Sadık Pehlivan ikinci oldu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8492"
},
{
"baslik":"Wushu’da Furkan Gürüz Avrupa şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8491"
},
{
"baslik":"Wushu’da Türkiye Şampiyonası’na damga vurduk",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8399"
},
{
"baslik":"Wushu’da Kürsü İstanbul Büyükşehir’in",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8342"
},
{
"baslik":"Mink ve Yıldız Wushucularımızdan 10 madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8333"
},
{
"baslik":"Selahattin Yıldız Dünya Kupası 3.’sü",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8253"
},
{
"baslik":"Genç Wushucularımız kürsüyü parselledi..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8139"
},
{
"baslik":"Minik Wushucularımızdan 20 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8111"
},
{
"baslik":"Zirve Minik, Yıldız ve Genç Wushucularımızın… ",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7966"
},
{
"baslik":"Wushu’da Dünyayı fethettik…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7910"
},
{
"baslik":"Elif Akyüz Dünya 2.’si..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7905"
},
{
"baslik":"Kürsü Sude Sekin ve Adem Kapan’ın..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7873"
},
{
"baslik":"Wushu’da Gazi Kupası’na damga vurduk..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7842"
},
{
"baslik":"Balkan Wushu Şampiyonası’nda 8 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7759"
},
{
"baslik":"Wushu’da kürsüye ambargo koyduk…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7741"
},
{
"baslik":"Türkiye Wushu Şampiyonası’nda 11 madalya aldık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7730"
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