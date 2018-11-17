function hideMobile() {
	var width = window.matchMedia("(max-width: 900px)");
	if (width.matches) {
		// TODO add functionality
		var container = document.getElementById("mx-auto");
		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}
		var heading = document.createElement("h3");
		var message = document.createElement("small");
		var headText = document.createTextNode("Oops!");
		var messageText = document.createTextNode("Your screen size is too small. If you are using a mobile device, please access SOSA on a computer. If you are using a computer, please resize your browser and refresh the page.");
		heading.appendChild(headText);
		message.appendChild(messageText);
		container.appendChild(heading);
		container.appendChild(message);
	}
}