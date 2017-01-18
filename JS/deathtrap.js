var img = "billy";

function start() {
	document.getElementById("body22").style.backgroundImage = "url(Images/room1.jpg)";

	document.getElementById("begin").style.display ="none";
	document.getElementById("info").style.display ="none";
	document.getElementById("trap1").style.display ="inline"
	document.getElementById("key").style.display ="inline"
	document.getElementById("timer")style.dislay ="inline"
    setTimeout(function(){ document.getElementById("body22").style.backgroundImage = "url(Images/GAMEOVER.jpg)"; }, 3000)   
   */ var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 0.5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}; /*
}

function info() {
	if (document.getElementById("information").style.display !="inline"){
		document.getElementById("information").style.display="inline";
	} else {
		document.getElementById("information").style.display="none";
	}
	if (img != "sawtv"){
		document.getElementById("body22").style.backgroundImage = "url('Images/sawtv.jpg')";
		img = "sawtv";
	} else {
		document.getElementById("body22").style.backgroundImage ="url('Images/billy the puppet.jpg')";
		img = "billy";
	}
	if (document.getElementById("begin").style.display !="none"){
		document.getElementById("begin").style.display ="none";
	} else {
		document.getElementById("begin").style.display ="inline";
	}
	document.getElementById("audiohelp").autoplay = true;
}

function key(){
	document.getElementById("key").style.display ="none"
	document.getElementById("pad").style.display ="inline"
}30