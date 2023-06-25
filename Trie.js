function TrieNode() {
	this.children = {};
	this.endOfWord = false;
	this.words = [];
}

function Trie() {
	this.root = new TrieNode();
}

Trie.prototype.add = function (word) {
	let curNode = this.root;

	for (const letter of word) {
		if (!curNode.children[letter]) {
			curNode.children[letter] = new TrieNode();
		}
		curNode = curNode.children[letter];
		curNode.words.push(word);
	}
	curNode.endOfWord = true;
};

Trie.prototype.search = function (word) {
	let curNode = this.root;

	for (const letter of word) {
		if (!curNode.children[letter]) {
			return [];
		}
		curNode = curNode.children[letter];
	}
	return curNode.words;
};
