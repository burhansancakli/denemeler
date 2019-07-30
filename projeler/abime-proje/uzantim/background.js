var activepages=[];
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	if(message.closeThis){
		chrome.tabs.query({active:true,currentWindow:true},function(tabs){
			chrome.tabs.remove(tabs[0].id);
		});
	}
});
chrome.extension.onConnect.addListener(function(port) {
	console.log("Connected .....");
	port.onMessage.addListener(function(msg) {
		if(msg.slice(0,1)=='d'){
			var index=activepages.indexOf(msg.slice(1,-1));
			delete activepages[index];	
		}else if(msg.slice(0,1)=='a'){
			activepages.push(msg.slice(1,-1));
			console.log('add '+msg.slice(1,-1));
		}else if(msg.slice(0,1)=='c'){
			var index=activepages.indexOf(msg.slice(1,-1));
			if(index==-1)
			{
				console.log('yok o url');
				port.postMessage(activepages[0]);
			}else{
				console.log('var o url');
				port.postMessage("true");
			}
		}
	});
})