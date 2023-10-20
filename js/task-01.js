const ctgr = document.querySelector("#categories");

const items = document.querySelectorAll(".item");
let messege = ``;
messege += `Number of categories: ${ctgr.children.length}\n`;
items.forEach((item) => {
	messege += `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}\n`;
});

console.log(messege);
