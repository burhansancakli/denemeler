var countdown=CountDownCheck(threshold,moneyAmount);
function CountDownCheck(threshold,moneyAmount){
	var buttonToClick=''
	if(moneyAmount==50){
		buttonToClick=document.getElementById('50-lira');
	}else if(moneyAmount==100){
		buttonToClick=document.getElementById('100-lira');
	}else if(moneyAmount==200){
		buttonToClick=document.getElementById('200-lira');
	}
	var started=false;
	var miliseconds=0;
	var checktimer=setInterval(function(){
		if (started){
			miliseconds-=5;
			if (miliseconds <= threshold){
				buttonToClick.click();
				clearInterval(checktimer);
				return
			}
		}
		else if (document.getElementById('seconds').innerHTML==1){
			miliseconds=1000-5;
			started=true;
		}
	},5);
}