const form = document.getElementById('form');
const username1 = document.getElementById('username');
const email = document.getElementById('email');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id_2");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});


$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id_3");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id_4");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});

$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id_5");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});
$(document).on('click', '.toggle-password', function() {

    $(this).toggleClass("fa-eye fa-eye-slash");

    var input = $("#pass_log_id_6");
    input.attr('type') === 'password' ? input.attr('type','text') : input.attr('type','password')
});


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

form.addEventListener('Login', e => {
	e.preventDefault();

	checkInputs();
});
function checkInputs() {

	const usernameValue = username.value.trim();
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}


}

function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
