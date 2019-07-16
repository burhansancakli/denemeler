var haberler=[
{
"baslik":"Neslihan Yiğit’ten altın madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=9098"
},
{
"baslik":"Özge Bayrak Tek Bayanlar Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8989"
},
{
"baslik":"Badminton’da kürsü Yiğit ve Bayrak’ın…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8975"
},
{
"baslik":"Neslihan Yiğit Akdeniz Oyunları Şampiyonu…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8918"
},
{
"baslik":"Neslihan Yiğit’ten tek bayanlarda bronz madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8660"
},
{
"baslik":"Özge Bayrak şampiyon",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8659"
},
{
"baslik":"Badminton takımımız Süper Lig Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8637"
},
{
"baslik":"Neslihan Yiğit’ten altın madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8593"
},
{
"baslik":"Badminton Open’da Neslihan Yiğit Şampiyon",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8542"
},
{
"baslik":"Özge Bayrak ve Cemre Fere Çift Bayanlar Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8521"
},
{
"baslik":"Badminton’da Genel Klasman Şampiyonuyuz",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8352"
},
{
"baslik":"Badminton takımımız Türkiye Süper Lig Şampiyonu..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8265"
},
{
"baslik":"Badminton’da 3 etap sona erdi…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8243"
},
{
"baslik":"Badminton’da 1. Etabı lider tamamladık…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8150"
},
{
"baslik":"Mehmet Kenan Aydın Badminton İl Şampiyonu..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8147"
},
{
"baslik":"Neslihan Yiğit’ten gümüş madalya..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8071"
},
{
"baslik":"Neslihan Yiğit Tek Bayanlarda Şampiyon..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8052"
},
{
"baslik":"Badminton’da Şampiyon İstanbul Büyükşehir..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7972"
},
{
"baslik":"Badminton’da Rio yürüyüşü sürdü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7958"
},
{
"baslik":"Badminton’da zirve İstanbul BB’nin",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7947"
},
{
"baslik":"Badmintoncularımızdan 3 Madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7942"
},
{
"baslik":"Badmintoncularımız puan toplamaya devam etti.",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7861"
},
{
"baslik":"Cemre Fere tek ve çiftler şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7853"
},
{
"baslik":"Badminton’da 2 gümüş madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7819"
},
{
"baslik":"Özge Bayrak-Neslihan Yiğit Avrupa Oyunları 3.’sü..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7811"
},
{
"baslik":"Badminton'da Olimpiyat yürüyüşü…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7725"
},
{
"baslik":"Badminton’da puan toplamaya devam ettik..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7707"
},
{
"baslik":"Özge Bayrak ve Neslihan Yiğit Çiftler Şampiyonu",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7692"
},
{
"baslik":"Badmintoncularımızdan 3 madalya… ",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7661"
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