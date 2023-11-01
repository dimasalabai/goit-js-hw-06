const fontControl = document.getElementById("font-size-control");

const text = document.getElementById("text");

fontControl.addEventListener("input", () => {
	text.style.fontSize = Number(fontControl.value) + "px";
});
