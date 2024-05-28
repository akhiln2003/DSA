

// class Node {
//     constructor(value) {
//         this.data = value;
//         this.next = null;
//     }
// }
// class Stack {
//     constructor() {
//         this.top = null;
//     }
//     push(value) {e
//         let node = new Node(value);
//         if (this.top == null) {
//             this.top = node;
//         } else {
//             node.next = this.top;
//             this.top = node;
//         }
//     }
//     pop() {
//         if (this.top == null) {
//             return console.log(" the stack is empty ");
//         } else {
//             this.top = this.top.next;
//         }
//     }
//     peek() {
//         if (this.top == null) {
//             return console.log(" the stack is empty ");
//         } else {
//             return console.log(this.top.data);
//         }
//     }
//     print() {
//         if (this.top == null) {
//             return console.log(" the queue is empty ");
//         } else {
//             let curretn = this.top;
//             while (curretn) {
//                 console.log(curretn.data);
//                 curretn = curretn.next;
//             }
//         }
//     }
// }
// const stack = new Stack();
// stack.push(3)
// stack.push(2)
// stack.push(1)
// stack.print()
// stack.pop()
// stack.peek()







// class Node{
//     constructor( value ){
//         this.data = value;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){
//         this.front = null;
//         this.rear = null;
//     }
//     enqueue(value){
//         let node = new Node( value );
//         if( this.rear == null ){
//             this.front = this.rear = node;
//         }else{
//             this.rear.next = node;
//             this.rear = node;
//         }
//     }
//     dequeue(){
//         if( this.rear == null ){
//             return console.log(" the queue is empty ");
//         }else{
//              this.front = this.front.next;
//         }
//         if( this.front == null ){
//             this.rear = null;
//         }
//     }
//     print(){
//         if(this.front == null){
//             return console.log(" the queue is empty ");
//         }else{
//             let curretn = this.front;
//             let out = "";
//             while(curretn){
//                 out += ` ${curretn.data} `;
//                 curretn = curretn.next;
//             }
//             return console.log( out );
//         }
//     }
// }
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.print()
// queue.dequeue()
// queue.print()



                // With Array
// class queue{
//     constructor(){
//         this.array = [];
//     }
//     enqueueu(value){
//         this.array.push(value);
//     }
//     dequeue(){
//         if( this.array.length < 1 ){
//             return console.log(" the  array is empty ");
//         }else{
//             this.array.unshift()
//         }
//     }
// }




// class stack{
//     constructor(){
//         this.array = [];
//     }
//     push(value){
//         this.array.push(value);
//     }
//     pop(){
//         if(this.array.length < 1){
//             return console.log(" the stack is empt");
//         }
//         this.array.pop()
//     }
// }





