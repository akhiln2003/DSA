class Node {
    constructor( value ){
        this.value = value;
        this.left = null;
        this.right =null;
    }
}
 class Tree{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return this.root == null
    }
    set( value ){
        let node = new Node( value )
        if( this.isEmpty() ){
           return  this.root = node;
        }
        this.insertNewNode( this.root , node );
        
    }
    insertNewNode( root , node ){
        if( root.value > node.value ){
            if( root.left == null ){
                root.left = node;
            }else{
                this.insertNewNode( root.left , node );
            }
        }else{
            if( root.value < node.value ){
                if( root.right == null ){
                    root.right = node;
                }else{
                    this.insertNewNode( root.right , node );
                }
            }
        }
    }
    search( value ){
        if( this.isEmpty() ){
            return console.log(" the tree is empty ");
        }
        let temp = this.root;
        while( temp ){
            if( temp.value == value ){
                return console.log(true);
            }else if( value < temp.value ){
                temp = temp.left;
            }else{
                temp = temp.right;
            }
        }
        return console.log(false);
    }
    max( root = this.root ){
        if( root == null ) return console.log(" the tree is empty ");
        if( root.right == null )  return root.value;
        return this.max( root = root.right );
    }
    min( root = this.root ){
        if( root == null )return console.log("the tree is empty ");
        if(root.left == null )return root.value;
        return this.min( root = root.left )
    }
    inOrderTraversal( root = this.root ){
        if( !root ) return []
         return [...this.inOrderTraversal( root.left ) , root.value , ...this.inOrderTraversal(root.right)]
    }
    preOrderTraversal( root = this.root ){
        if( root ){
            console.log( root.value );
            this.preOrderTraversal( root.left );
            this.preOrderTraversal( root.right );
        }
    }
    postOrderTraversal( root = this.root ){
        if( root ){
            this.postOrderTraversal( root.left );
            this.preOrderTraversal( root.right );
            console.log( root.value );
        }
    }
    deletion( target , root = this.root ){
        if( !root ) return null;
        if( target < root.value ){
            root.left = this.deletion( target , root.left );
        }else if( target > root.value ){
            root.right = this.deletion( target , root.right );
        }else{
            if( !root.right ){
                return root.left;
            }
            if( !root.left ){
                return root.right
            }
            root.value = this.min(root.right);
            root.right = this.deletion( root.value , root.right)
        }
        return root
    }
    isBST( target ){
        let sorted = this.inOrderTraversal(this.root);
        for( let i = 0 ; i < sorted.length; i++ ){
            if( sorted[i] > sorted[i+1])return false
        }
        return true
    }
    closest( target , root = this.root ){
        if( !this.root )return " the tree is empty ";
        let dif = Infinity;
        let value = null;
        while( root ){
            let d = Math.abs( root.value - target );
            if( d < dif && root.value != target ){
                dif = d;
                value = root.value;
            }
            if( root.value > target ){
                 root = root.left
            }else if( root.value < target ){
                 root = root.right
            }else{
                break 
            }
        }
        return value + " : " + dif
    }
    console(){
        console.log(this.root);
    }
 }

 const tree = new Tree();
 tree.set( 3 )
 tree.set(1);
 tree.set(9)
 tree.set(8)
 tree.set(13)
//  tree.search(3)
//  tree.console()
//  console.log(tree.min())
//  console.log(tree.max());
// tree.deletion(1)
// tree.console()
// console.log(tree.closest(150));
console.log(tree.isBST());