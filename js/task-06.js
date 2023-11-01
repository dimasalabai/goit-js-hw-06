const input = document.getElementById("validation-input");

function validation() {
	if (Number(input.dataset.length) > input.value.length) {
		input.classList.add("invalid");
		return;
	}

	input.classList.remove("invalid");
	input.classList.add("valid");
}

input.addEventListener("blur", validation);
