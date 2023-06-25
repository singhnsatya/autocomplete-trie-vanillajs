function createSearchBox() {
	this.words = [];
	this.element = null;
	this.ulElement = null;
	this.inputRef = null;
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
		results.forEach((word) => {
			const listElem = document.createElement("li");
			listElem.setAttribute("id", word);
			listElem.addEventListener("click", (e) => this.onItemClick(e));
			listElem.innerHTML =
				`<b id='${word}'>${word.substr(0, inputValue.length)}</b>` +
				`<span id='${word}'>${word.substr(
					inputValue.length,
					word.length
				)}</span>`;
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

createSearchBox.prototype.setInputRef = function (that) {
	this.inputRef = that;
};

createSearchBox.prototype.onItemClick = function (e) {
	e.preventDefault();
	this.inputRef.onSelect(e.target.id);
	e.stopPropagation();
};
