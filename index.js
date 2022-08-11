var pass = document.querySelector('.pass');
var signin = document.querySelector('.signin');
var signInButton = document.querySelector('.signInButton');
signInButton.onclick =function () {
			if(pass.value.length<8) {
							alert('Your Password must not be less than 8 characters')
			}
}