const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

function createMarkup(arr) {
	const listIng = document.getElementById("ingredients");
	const arrLi = arr.map((ing) => {
		const listItems = document.createElement("li");
		listItems.textContent = ing;
		listItems.classList.add("item");

		return listItems;
	});
	listIng.append(...arrLi);
}

createMarkup(ingredients);
