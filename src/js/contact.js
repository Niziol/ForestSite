const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const submitBtn = document.querySelector('.contact__form-btn');

const showError = (input, text) => {
	input.classList.add('error');
	input.placeholder = text;
};

const clearError = (input) => {
	input.classList.remove('error');
};

const validateIfNotEmptyForm = (inputs) => {
	let flag = true;

	inputs.forEach((input) => {
		if (input.value === '') {
			flag = false;
			showError(input, input.placeholder);
		} else {
			clearError(input);
		}
	});

	return flag;
};

const validateEmail = (email) => {
	let flag = true;
	const regEx =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!regEx.test(email.value)) {
		flag = false;
		showError(email, 'Nieprawidłowy adress Email');
	} else {
		clearError(email);
	}

	return flag;
};

const validateLength = (input, minLength) => {
	let flag = true;
	if (input.value.length < minLength) {
		flag = false;
		const inputName = input.previousElementSibling.innerText.slice(0, -1);
		showError(input, `${inputName} składa się z ${minLength} znaków.`);
	} else {
		clearError(input);
	}

	return flag;
};

const validateForm = () => {
	let errorFound = false;

	validateIfNotEmptyForm([nameInput, emailInput, msg]) || (errorFound = true);
	if (validateIfNotEmptyForm([emailInput])) {
		validateEmail(emailInput) || (errorFound = true);
	}
	validateLength(nameInput, 3) || (errorFound = true);
	validateLength(msg, 10) || (errorFound = true);

	return !errorFound;
};

function initMap() {
	const position = { lat: 50.088232279799264, lng: 19.892862644175942 };

	const map = new google.maps.Map(document.querySelector('.map'), {
		zoom: 15,
		center: position,
	});

	const marker = new google.maps.Marker({
		position: position,
		map: map,
	});
}

window.initMap = initMap;

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (validateForm()) {
		window.alert('Formularz został poprawnie wysłany!');
	}
});
