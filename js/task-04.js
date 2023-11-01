const value = document.getElementById("value");
const decrement = document.querySelector("button[data-action=decrement]");
const increment = document.querySelector("button[data-action=increment]");

decrement.addEventListener("click", dec);
increment.addEventListener("click", inc);

function dec() {
	value.textContent = Number(value.textContent) - 1;
}
function inc() {
	value.textContent = Number(value.textContent) + 1;
}
