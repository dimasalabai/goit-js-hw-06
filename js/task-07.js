const fontControl = document.getElementById("font-size-control");

const text = document.getElementById("text");
text.style.fontSize = Number(fontControl.value) + "px";
fontControl.addEventListener("input", () => {
	text.style.fontSize = Number(fontControl.value) + "px";
});
