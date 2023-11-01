const form = document.querySelector(".login-form");
const userInfo = {};
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const {
		elements: { password, email },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		alert("Всі поля повинні бути заповнені.");
		return;
	}
	userInfo[password.name] = password.value;
	userInfo[email.name] = email.value;

	form.reset();
	console.log(userInfo);
});
