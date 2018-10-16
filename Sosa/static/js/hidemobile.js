function hideMobile() {
	var width = window.matchMedia("(max-width: 900px)");
	if (width.matches) {
		window.location = "mobile.html";
	}
}