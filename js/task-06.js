const input = document.getElementById("validation-input");

function validation() {
	if (Number(input.dataset.length) === input.value.length) {
		input.classList.remove("invalid");
		input.classList.add("valid");
		return;
	}

	input.classList.add("invalid");
}

input.addEventListener("blur", validation);
