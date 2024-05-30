

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
//     push(value) {
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
//             return console.log( ` this is the peek vale ${this.top.data }`);
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
// stack.print()







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
// queue.print()
// queue.dequeue()
// queue.print()





                            // With Array

// class queue {
//     constructor() {
//         this.array = [];
//     }
//     enqueueu(value) {
//         this.array.push(value);
//     }
//     dequeue() {
//         if (this.array.length < 1) {
//             return console.log(" the  array is empty ");
//         } else {
//             this.array.shift()
//         }
//     }
//     print() {
//         if (this.array.length < 1) {
//             return console.log(" stack is empty ");
//         }
//         for (let i = this.array.length-1; i >= 0 ; i++) {
//             console.log(this.array[i]);
//         }
//     }
// }
// const queues = new queue()
//  queues.enqueueu(1)
//  queues.enqueueu(2);
//  queues.enqueueu(3)
//  queues.print()
//  queues.dequeue()
//  queues.print()



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
//     print(){
//         if( this.array.length < 1 ){
//             return console.log(" stack is empty ");
//         }
//         for( let i = 0; i < this.array.length; i++ ) {
//             console.log(this.array[i]);
//         }
//     }
// }
// const stacks = new stack()
// stacks.push(1)
// stacks.push(2);
// stacks.push(3)
// stacks.print()
// stacks.pop()
// stacks.print()


