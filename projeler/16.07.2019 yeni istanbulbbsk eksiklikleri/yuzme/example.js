var haberler=[
{
"baslik":"Teşvik Yüzme Şampiyonası’nda 33 madalya…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8040"
},
{
"baslik":"Yüzme Teşvik Şampiyonası’na damga vurduk.. ",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=8037"
},
{
"baslik":"Geleceğin Olimpiyat Yüzücüleri ''Suya Adını Yaz''dılar",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7930"
},
{
"baslik":"Aksaray’da Büyükşehir Rüzgarı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7787"
},
{
"baslik":"Minik Yüzücülerimiz Suya Adını Yazdı…",
"link":"http://eski.istanbulbbsk.org/brans.php?haberid=7706"
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