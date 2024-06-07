

// class stackUsingQueue{
//     constructor(){
//         this.stack = []
//         this.stack1 = []
//     }
//     enqueue( value ){   
//             while( this.stack.length){
//                 this.stack1.push( this.stack.pop())
//             }
//             this.stack.push(value);
//             while(this.stack1.length ){
//                 this.stack.push(this.stack1.pop())
//             }
//     }
//     dequeue(){
//         console.log(this.stack.pop());
//     }dis(){
//         console.log(this.stack);
//     }
// }
// const queue = new stackUsingQueue();
// queue.enqueue(1)
// queue.enqueue(2);
// queue.enqueue(3)
// queue.dis()
// queue.dequeue()
// queue.dis()





// class twoStackToQueue {
//     constructor(){
//         this.stack = [];
//         this.stack1 = [];
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         if(this.stack.length < 1) return console.log(" stack is empty ");
//         while( this.stack.length ){
//             this.stack1.push( this.stack.pop() );
//         }
//         console.log("removed : " + this.stack1[this.stack1.length - 1]);
//         this.stack1.pop()
//         while( this.stack1.length ){
//              this.stack.push( this.stack1.pop() );
//         }
//     }
// }
// const stackQueue = new twoStackToQueue();
// stackQueue.push(1)
// stackQueue.push(2)
// stackQueue.push(3)
// stackQueue.pop()
// stackQueue.pop()