//made by @chipio_dev on twitter, follow me for garbage
//I'm really not great with javascript so there's probably a lot of room
//for improvement in here, feel free to take a crack at it
//5/29/2020
var enabled=chrome.storage.sync.get("SILENT_TWEET_ENABLED",function(data){
	enabled=data.SILENT_TWEET_ENABLED;
});;

chrome.runtime.onMessage.addListener(function(request){
	if (request=="SILENT_TWEET_ENABLED") {
		enabled=true;
	} else if (request=="SILENT_TWEET_DISABLED") {
		enabled=false;
	}
});

setInterval(function(){
	/*function tweetHasImage(element){
		var elements=element.getElementsByTagName("*");
		for (i=0;i<elements.length;i++){
			if (elements[i].nodeName=="IMG") {
				return true;
			}				I tried to get extra fancy with it and make it so tweets without
		}					images would just be hidden entirely, but apparently that's harder
		return false;		than it sounds. Still not sure why I wasn't able to get it working.
	}*/
	function sweep() { //where the magic happens
		/*var tweets=document.getElementsByClassName("css-1dbjc4n r-1igl3o0 r-qklmqi r-1adg3ll");
		for (i=0;i<tweets.length;i++){
			if (tweets[i].getElementsByTagName("IMG").length==0){
				console.log("no image");
				tweets[i].parentElement.style.display="none";
			}
		}*/
		var header=document.querySelectorAll('[role="banner"]')[0];
		var elements=document.getElementsByClassName("css-16my406");
		for (i=0;i<elements.length;i++){
			if (!header.contains(elements[i])) {
				elements[i].style.display="none";
			}
		}
	}
	if (enabled) {
		sweep();
	}
},200);