var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Autoplay Off");
	video.loop = false;
	console.log("Loop Off");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
	console.log("Displaying Volume");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = 0.9 * video.playbackRate;
 	console.log("Speed = " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = (1 / 0.9) * video.playbackRate;
 	console.log("Speed = " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 10;
 	console.log("Time = " + video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("Time = " + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	mute_button = document.querySelector("#mute");
	if(video.muted == true) {
		video.muted = false;
		mute_button.innerHTML = "Mute";
		console.log("Volume is Unmuted");
	}
	else if(video.muted == false) {
		video.muted = true;
		mute_button.innerHTML = "Unmute";
		console.log("Volume is Muted");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("The current volume is " + this.value/100);
	video.volume = (this.value / 100)
	document.querySelector("#volume").innerHTML = this.value/1 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("The current theme is Old School");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("The current theme is Original");
	video.classList.remove("oldSchool");
});

