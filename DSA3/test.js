// class Node{
//     constructor( value ){
//         this.data = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BST {
//     constructor( ){
//         this.root = null;
//     }
//     insertion( value ){
//         let node = new Node( value );
//         if(  this.root == null )return this.root = node;
//         return this.insertionVal( this.root , node );
//     }
//     insertionVal( root , node ){
//         if( root.data >= node.data ){
//            if(root.left == null ){
//             root.left = node;
//            }else{
//             this.insertionVal(root.left , node );
//            }
//         }else{
//             if( root.right == null){
//                 root.right = node;
//             }else{
//                 this.insertionVal( root.right , node )
//             }
//         }
//     }
//     min( root =  this.root ){
//         if( root == null ) return console.log(" the tree is empty");
//         if( root.left == null ) return root.data;
//         return this.min( root = root.left)
//     }
//     max( root = this.root ){
//         if( root == null )return console.log(" the tree is empty");
//         if( root.right == null )return root.data;
//         return this.max( root = root.right );
//     }
//     preorderTraversel(root = this.root){
//         if( root ){
//             console.log(root.data)
//             this.preorderTraversel(root.left);
//             this.preorderTraversel(root.right)
//         }
//     }
//     inOrderTraversel( root = this.root){
//         if( root ){
//            this.inOrderTraversel(  root.left ) ;
//            console.log( root.data );
//            this.inOrderTraversel( root.right )
//         }
//     }
//     postOrderTraversal( root = this.root ){
//         if( root ){
//             this.postOrderTraversal( root.left)
//             this.postOrderTraversal( root.right);
//             console.log( root.data )
//         }
//     }
//     delete( target , root  = this.root ) {
//         if( !root  )return null;
//         if( target < root.data  ){
//            root.left =  this.delete( target , root.left , );
//         }else if( target > root.data ){
//            root.right =  this.delete( target ,root.right ,  );
//         }else{
//             if( !root.left ){
//                 return root.right;
//             }
//              if( !root.right ){
//                 return root.left;
//             }
//             root.data = this.min(root.right);
//             root.right = this.delete( root.data ,  root.right)
//         }
//         return root;
//     }

//     log(){
//         console.log(this.root);
//     }
// }

// const bst = new BST();
// bst.insertion(6);
// bst.insertion(4);
// bst.insertion(1)
// bst.insertion(9);
// bst.insertion(44)
// bst.insertion(2)
// bst.delete(4 )
// console.log(bst.min())
// console.log(bst.max())
// bst.inOrderTraversel()
// bst.postOrderTraversal()
// bst.log()








// class Node {
//     constructor(value) {
//         this.data = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BSTree {
//     constructor() {
//         this.root = null;
//     }
//     insert(value) {
//         let node = new Node(value);
//         if (!this.root) return this.root = node;
//         return this.insertionHelper(this.root, node);
//     }
//     insertionHelper(root, node) {
//         if (root.data > node.data) {
//             if (root.left == null) {
//                 return root.left = node;
//             }
//             return this.insertionHelper(root.left, node);
//         } else {
//             if (root.right == null) {
//                 return root.right = node;
//             }
//             return this.insertionHelper(root.right, node);
//         }
//     }
//     min(root = this.root) {
//         if (!root) return "the tree is empty "
//         if (!root.left) return root.data;
//         return this.min(root.left)
//     }
//     max(root = this.root) {
//         if (!root) return "the tree is empty ";
//         if (!root.right) return root.data;
//         return this.max(root.right)
//     }
//     delete(target, root = this.root) {
//         if (!root) return "the tree is empty ";
//         if (root.data > target) {
//             root.left = this.delete(target, root.left);
//         } else if (root.data < target) {
//             root.right = this.delete(target, root.right);
//         } else {
//             if (!root.right) {
//                 return root.left;
//             }
//             if (!root.left) {
//                 return root.right;
//             }
//             root.data = this.min(root.right);
//             root.right = this.delete(root.data, root.right);
//         }
//         return root
//     }
//     inOrder(root = this.root) {
//         if (!root) return [];
//         return [...this.inOrder(root.left), root.data, ...this.inOrder(root.right)]

//     }
//     preOrder(root = this.root) {
//         if (!this.root) return console.log(" the tree is empty ");
//         if (root) {
//             console.log(root.data);
//             this.preOrder(root.left);
//             this.preOrder(root.right);
//         }
//     }
//     postOrder(root = this.root) {
//         if (!this.root) return console.log(" the tree is empty ");
//         if (root) {
//             this.postOrder(this.left)
//             this.postOrder(root.right)
//             console.log(root.data);
//         }
//     }
// closest( target , root = this.root ){
//     if( !root )return console.log(" the tree is empty ");
//     let dif = Infinity;
//     let value = null
//     while( root ){
//         let d = Math.abs( root.data - target );
//         if( dif > d && root.data != target ){
//             dif = d;
//             value = root.data
//         }
//         if( root.data > target ){
//             root = root.left
//         }else if( root.data < target ){
//             root = root.right;
//         }else{
//             break;
//         }
//     }
//     return  console.log(value , dif);
// }

// isBST( root = this.root ){
//     if( !this.root )return " the tree is empty";
//     let sorted  = this.inOrder( root );
//     for( let i = 0; i < sorted.length; i++ ){
//         if( sorted[ i ] > sorted[ i + 1 ] )return false;
//     }
//     return true;
// }
//     print() {
//         console.log(this.root);
//     }
// }
// const bst = new BSTree();
// bst.insert(22);
// bst.insert(11);
// bst.insert(54);
// bst.insert(4)
// console.log(bst.min());
// console.log(bst.max());
// bst.delete(4)
// bst.print()
// bst.closest(12)
// console.log(bst.isBST())