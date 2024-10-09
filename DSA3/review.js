class Node{
    constructor( value ){
        this.data = value ;
        this.leftchild = null;
        this.rightchild = null;
    }
}
class Tree {
    constructor(){
        this.root = null
    }
    insertion( value ){
        let node = new Node( value );
        if( this.root == null ) return this.root = node;
        this.insertionHelper( this.root , node );
    }
    insertionHelper( root , node ){
        if( root.data > node.data ){
            if( root.leftchild == null ) return root.leftchild = node
            this.insertionHelper( root.leftchild , node );
        }else{
            if( root.rightchild == null ) return root.rightchild = node;
            this.insertionHelper( root.rightchild , node)
        }
    }
    hight( root = this.root ){
         let out = 0;
         if( this.root == null ) return " the tree is empty "
        while( root ){
            if( root.leftchild != null) {
                root = root.leftchild;
                out++
            }else{
                root = root.rightchild
                out++
            }
        }
        return out;
    }
    inorder( root = this.root ){
        if( !root) return [];
        return [ ...this.inorder(root.leftchild) , root.data , ...this.inorder( root.rightchild )];
    }
    isBstOrNot(){
        let inorder = this.inorder;
        for( let i = 0; i < inorder.length; i++ ){
            if( inorder[i] > inorder[i+1]) return false
        }
        return true
    }
}
const tree = new Tree()
tree.insertion(9)
tree.insertion(7);
tree.insertion(10);
tree.insertion(1);
console.log(tree.isBstOrNot());
