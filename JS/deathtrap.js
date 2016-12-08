function start() {
	document.getElementById("body22").style.backgroundImage = "url(Images/room1.jpg)";
}

function info() {
	if (document.getElementById("information").style.display !="inline"){
		document.getElementById("information").style.display="inline";
	} else {
		document.getElementById("information").style.display="none";
	}
	if (document.getElementById("body22").style.backgroundImage = "url(Images/Billy the puppet.jpg)"){
		document.getElementById("body22").style.backgroundImage = "url(Images/sawtv.jpg)";
	} else {
		document.getElementById("body22").style.backgroundImage ="url(Images/sawtv.jpg)";
	}
	if (document.getElementById("body22").style.backgroundImage = "url(Images/sawtv.jpg)"){
		document.getElementById("body22").style.backgroundImage = "url(Images/billy the puppet.jpg)"; 
	} else {
		document.getElementById("body22").style.backgroundImage = "url(Images/billy the puppet.jpg)";
	}
}