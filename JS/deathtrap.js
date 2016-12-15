var img = "billy";

function start() {
	document.getElementById("body22").style.backgroundImage = "url(Images/room1.jpg)";

	document.getElementById("begin").style.display ="none";
	document.getElementById("info").style.display ="none";
	document.getElementById("trap1").style.display ="inline"
	document.getElementById("key").style.display ="inline"
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
}

function key(){
	document.getElementById("key").style.display ="none"
}