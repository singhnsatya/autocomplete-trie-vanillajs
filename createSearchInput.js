function createSearchInput() {
	this.element = null;
	this.listBox = null;
	this.init();
	this.addStyles();
	this.addEventListeners();
}

createSearchInput.prototype.init = function () {
	this.element = document.createElement("input");
};

createSearchInput.prototype.addStyles = function () {
	this.element.style.paddingLeft = "3vh";
	this.element.placeholder = "Search";
};

createSearchInput.prototype.addEventListeners = function () {
	this.element.addEventListener("keyup", (e) => this.keyUpListener(e));
};

createSearchInput.prototype.keyUpListener = function (e) {
	e.preventDefault();
	const results = trieSearch.search(e.target.value.toLowerCase());
	this.listBox.createListItem(results, e.target.value);
	e.stopPropagation();
};

createSearchInput.prototype.addListBox = function (elem) {
	this.listBox = elem;
	this.setInputRefInBox();
};

createSearchInput.prototype.setInputRefInBox = function () {
	this.listBox.setInputRef(this);
};

createSearchInput.prototype.onSelect = function (value) {
	this.element.value = value;
	this.listBox.element.style.display = "none";
};
