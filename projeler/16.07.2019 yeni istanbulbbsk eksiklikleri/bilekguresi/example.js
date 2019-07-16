var haberler=[
{
"baslik":"Bilek Güreşinde 13 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8790"
},
{
"baslik":"Engelli Bilek güreşinde 14 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8768"
},
{
"baslik":"Bilek Güreşi’nde 7 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8524"
},
{
"baslik":"Bilek Güreşinde 7 madalya",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8487"
},
{
"baslik":"Bilek güreşinde madalyaları topladık",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8404"
},
{
"baslik":"Bilek Güreşi takımımız 9 madalya ile döndü",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8396"
},
{
"baslik":"Dünya’da Bileğimiz bükülmedi…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8235"
},
{
"baslik":"Romanya’da Bileğimiz Bükülmedi…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8148"
},
{
"baslik":"Bilek Güreşi’nde Engel tanımadık..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8093"
},
{
"baslik":"Bilek Güreşi’nde madalyaları topladık..",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8086"
},
{
"baslik":"Bilek Güreşinde İbrahim Uysal Türkiye 2.’si…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7960"
},
{
"baslik":"Bilek Güreşi’nde Fatih Erdoğan’dan 2 madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7949"
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