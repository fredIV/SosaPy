/* TODO
	add form submission
*/

function passwordCheck() {
	//Get password value from form
	var password = document.getElementById("password").value;
	//Create patterns to test password against, one for each requirement
	var uppercase = new RegExp("[A-Z]");
	var lowercase = new RegExp("[a-z]");
	var number = new RegExp("[0-9]");

	//If password does not meet any requirement, display error message
	if (!uppercase.test(password)) {
		document.getElementById("message").innerHTML = "Your password does not match the requirements. Please try again.";
		return 0;
	}
	else if (!lowercase.test(password)) {
		document.getElementById("message").innerHTML = "Your password does not match the requirements. Please try again.";
		return 0;
	}
	else if (!number.test(password)) {
		document.getElementById("message").innerHTML = "Your password does not match the requirements. Please try again.";
		return 0;
	}
	//Make sure length of password is 8 characters or greater
	else if (password.length < 8) {
		document.getElementById("message").innerHTML = "Your password does not match the requirements. Please try again.";
		return 0;
	}
	else {
		document.getElementById("message").innerHTML = "";
		//Submit form
	}
}