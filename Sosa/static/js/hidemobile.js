function hideMobile() {
	var width = window.matchMedia("(max-width: 900px)");
	if (width.matches) {
		window.location = "mobile";
	}
	else {
		window.resizeTo(500,500);
	}
}