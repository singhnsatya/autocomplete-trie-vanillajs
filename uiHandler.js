const wordList = [
	"Geeks",
	"Gmail",
	"Mail",
	"Apple",
	"Mango",
	"Shirt",
	"Tshirt",
	"Appe",
];
const trieSearch = new Trie(new TrieNode());
for (const word of wordList) {
	trieSearch.add(word.toLowerCase());
}

function renderUI() {
	const searhContainer = document.createElement("div");
	const searchInput = new createSearchInput();
	const listBox = new createSearchBox();
	searchInput.addListBox(listBox);
	searhContainer.appendChild(searchInput.element);
	searhContainer.appendChild(listBox.element);
	document.querySelector(".container").appendChild(searhContainer);
}
