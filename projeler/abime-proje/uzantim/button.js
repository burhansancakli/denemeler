chrome.runtime.onInstalled.addListener(function() {    });
var currenturl;
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
	currenturl = tabs[0].url;
});
chrome.storage.local.get(['url'], function(result) {
	if(result.url==null){
		console.log('its undefined');
		chrome.storage.local.set({'url': currenturl}, function() {
			console.log('Value is set to ' + currenturl);
		});
	}
	else{
		return;
	}
});



var throttle=document.getElementById('throttle');
throttle.addEventListener('change',function(){
	if(throttle.checked)
	{
		document.getElementById('throttlelabel').innerHTML='Throttle Açık';
	}else{
		document.getElementById('throttlelabel').innerHTML='Throttle Kapalı';
	}
});
document.getElementById('run').addEventListener('click',function(){
	
	
	BackgroundAddUrl(currenturl);
	var throttle=4;
	var threshold=document.getElementById('threshold').value;
	var moneyAmount=document.querySelector('input[name="moneyamount"]:checked').value;
	if (threshold==''){threshold=0;}
	if (throttle.checked){threshold+=throttle;}
	currentPage=chrome.tabs;
	currentPage.executeScript({
		code:"var threshold="+threshold+';var moneyAmount='+moneyAmount+';',
		allFrames:true
	},
	function(result){
		currentPage.executeScript({
			file:"script.js",allFrames:true
		});
	});
	turnPageDead();
});
function turnPageDead(){
	var main = document.getElementById("main");
	console.log('Turnpagedead');
	while(main.firstChild)
	{
		console.log('removing all childs');
		main.removeChild(main.firstChild);
	}
	var cancel_button = document.createElement("button");
	cancel_button.style.color="black";
	cancel_button.innerHTML="iptal";
	cancel_button.style.width="auto";
	cancel_button.setAttribute('id','cancel')
	document.body.appendChild(cancel_button);
	document.getElementById('cancel').addEventListener('click',function(){
		chrome.runtime.sendMessage({closeThis: true});
	});
}