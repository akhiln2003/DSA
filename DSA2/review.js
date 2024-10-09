// class Node{
//     constructor( value ){
//         this.data =value;
//         this.next = null;
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head = null;
//     }
//     push( value ){
//         let node = new Node(value)
//         if( this.head == null ){
//             this.head = node
//         }else{
//            node.next = this.head;
//            this.head = node;
//         }
//     }
//     pop(){
//         if( this.head == null ){
//             return console.log( " the stack is empty ");
//         }else{
//             console.log("removed : " , this.head.data);
//             return this.head = this.head.next;
//         }
//     }
   
    
// }
// const list = new linkedlist();
// list.push(1)
// list.push(2)
// list.push(3)
// list.pop()








// class Node {
//     constructor( value ){
//         this.data = value ;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){
//         this.first = null
//         this.end = null;
//     }
//     enqueue( value ){
//         let node = new Node( value )
//         if( this.end == null ){
//            return this.first = this.end = node;
//         }
//         this.end.next = node;
//         this.end = node
//     }
//     dequeue(){
//         if( this.end === null ){
//             return console.log( " the queue is empty ")
//         }
//         this.first = this.first.next;
//         if( this.first == null ){
//             this.end == null
//         }
//     }
//     display(){
//         let current = this.first;
//         while( current ){
//             console.log( current.data );
//             current = current.next;
//         }
//     }
// }
// const queue = new Queue();
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.dequeue()
// queue.dequeue()










// class HashTable {
//     constructor( size ){
//         this.table = new Array( size );
//         this.size = size;
//     }
//     hash( key ){
//         let has = 0;

//         for( let i = 0; i < key.length; i++ ){
//             has += key.charCodeAt(i)
//         }
//         return has % this.size;
//     }
//     set( key , value ){
//         let index = this.hash( key );
//         if( !this.table[ index ] ){
//             this.table[ index ] = [];
//         }
//         let bucket = this.table[ index ];
//         for( let i = 0; i < bucket.length; i++ ){
//             if( bucket[i][0] == key ){
//                 return bucket[i][1] = value;
//             }
//         }
//         bucket.push([ key , value ])
//     }
//     get( key ){
//         let index = this.hash( key );
//         if( !this.table[ index ]) {
//             return console.log( " the key is invalid ");
//         }
//         let bucket = this.table[ index ];
//         for( let i = 0; i < bucket.length; i++ ){
//             if( bucket[i][0] == key ){
//                 return console.log( bucket[i] );
//             }
//         }
//         return console.log(" the key is invalid ");
//     }
// }
