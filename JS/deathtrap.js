var img = "billy";

function start() {
	document.getElementById("body22").style.backgroundImage = "url(Images/room1.jpg)";
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
}