class trieNode{
    constructor(){
        this.children = {};
        this.endOfWord = false;
    }
}
class Trie {
    constructor(){
        this.root = new trieNode();
    }
    insert( word ){
        let currentNode = this.root;
        for( let i = 0; i < word.length; i++ ){
            if( !( word[i] in currentNode.children ) ) {
                currentNode.children[ word[ i ] ] = new trieNode()
            }
            currentNode = currentNode.children[ word[ i ] ];
        }
        currentNode.endOfWord = true;
    }
    search( word ){
        let currentNode = this.root;
        for( let i = 0; i < word.length; i++ ){
            if( !( word[ i ] in currentNode.children )) return false;
        }
        return currentNode.endOfWord
    }
    findAllWords( root = this.root , prifix = "" , word = []){
        if( root.endOfWord ){
            word.push( prifix );
        }
        for( let leter in root.children ){
                this.findAllWords( root.children[ leter ] , prifix+leter , word )
        }
        return word;
    }
    auto( string ){
        let root = this.root;
        for( let i = 0; i < string.length; i++ ){
            if( !( string[i] in root.children )) return []
            root = root.children[ string[ i ] ];
        };
        let words = [];
        this.complete(root, string, words)
       return words;
    };
    complete(node, prefix, words) {
      
        if (node.endOfWord)  words.push(prefix);
     
        for (let char in node.children) {
          
            this.complete(node.children[char], prefix+char, words)
        }
    }

}
const trie = new Trie();
trie.insert("akhil");
trie.insert( "peer");
trie.insert("sahal");
trie.insert("saha");
trie.insert("sahalfirstyoutuboevideo");
trie.insert("sahaldsaclass")
trie.insert("pottan")
console.log(trie.auto("s"));