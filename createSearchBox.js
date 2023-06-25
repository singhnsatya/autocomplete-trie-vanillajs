function createSearchBox() {
	this.words = [];
	this.element = null;
	this.ulElement = null;
	this.init();
	this.createListItem();
}

createSearchBox.prototype.init = function () {
	this.element = document.createElement("div");
	this.element.classList.add("search-box");
	this.ulElement = document.createElement("ul");
	this.element.appendChild(this.ulElement);
};

createSearchBox.prototype.createListItem = function (results, inputValue) {
	this.clearList();
	this.clearList();
	if (inputValue === "" || inputValue === undefined || results.length <= 0) {
		this.element.style.display = "none";
	} else {
		this.element.style.display = "block";
	}
	inputValue !== "" &&
		results &&
		results !== undefined &&
		results.forEach((word, index) => {
			const listElem = document.createElement("li");
			listElem.innerHTML =
				`<b>${word.substr(0, inputValue.length)}</b>` +
				`${word.substr(inputValue.length, word.length)}`;
			this.element.appendChild(listElem);
		});
};

createSearchBox.prototype.clearList = function () {
	const childListNodes = this.element.childNodes;
	childListNodes &&
		childListNodes.length > 0 &&
		childListNodes.forEach((i, j) => {
			i.remove();
		});
};
