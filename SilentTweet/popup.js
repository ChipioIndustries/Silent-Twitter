var enabled=false;
var button;
function messageContent() {
	chrome.tabs.query({currentWindow:true,active:true},function(tabs){
		if (enabled) {
			chrome.tabs.sendMessage(tabs[0].id,"SILENT_TWEET_ENABLED");
			if (button) {
				button.innerHTML="Disable";
			}
		} else {
			chrome.tabs.sendMessage(tabs[0].id,"SILENT_TWEET_DISABLED");
			if (button) {
				button.innerHTML="Enable";
			}
		}
	});
}

function onClick() {
	enabled=!enabled;
	chrome.storage.sync.set({SILENT_TWEET_ENABLED:enabled});
	messageContent();
}

function eventListener() {
	button=document.querySelector("button");
	button.addEventListener("click",onClick,false);
	messageContent();
}

document.addEventListener("DOMContentLoaded",eventListener,false);

chrome.storage.sync.get("SILENT_TWEET_ENABLED",function(data){
	enabled=data.SILENT_TWEET_ENABLED;
});
messageContent();