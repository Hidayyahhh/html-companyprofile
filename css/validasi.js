const form = document.getElementById('form');
const Name = document.getElementById('Name');
const email = document.getElementById('Email');
const password = document.getElementById('password');


form.addEventListener('login', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const NameValue = Name.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	
	if(NameValue === '') {
		setErrorFor(Name, 'Tolong diisi');
	} else {
		setSuccessFor(Name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Tolong diisi');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email tidak valid');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Tolong diisi');
	} else {
		setSuccessFor(password);
	}
	

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}