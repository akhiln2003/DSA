

// class queueUsingStack{
//     constructor(){
//         this.queue = [];
//         this.queue1 =[];
//     }
//     push( value ){
//         if( this.queue.length == 0 ){
//          return this.queue.push(value)
//         }
//         this.queue1.push(value);
//         while( this.queue.length){
//             this.queue1.push( this.queue.shift())
//         }
//         let temp = this.queue;
//         this.queue = this.queue1
//         this.queue1 = temp
//         return
//     }
//     pop(){
//        return console.log(this.queue.shift());
//     }
//     dis(){
//         console.log(this.queue);
//     }
// }
// const stack = new queueUsingStack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.dis()










// class queueToStack{
//     constructor(){
//         this.queue = [1,2,3,4];
//         this.queue1 = []
//     }
//     enqueue( value ){
//         this.queue.push( value )
//     }
//     dequeue(){
//         if( this.queue.length < 1 ) return console.log( " the stack is empty ")
//         while( this.queue.length > 1 ){
//             this.queue1.push(this.queue.shift())
//         }
//         console.log( " remove : " + this.queue[0]);
//         this.queue.shift();
//         while( this.queue1.length ){
//             this.queue.push(this.queue1.shift())
//         }
        
//     }
// }
// const queueStack =  new queueToStack();
// queueStack.enqueue(1)
// queueStack.enqueue(2)
// queueStack.enqueue(3)
// queueStack.enqueue(4)
// queueStack.enqueue(5)
// queueStack.dequeue()
// queueStack.dequeue()
// queueStack.dequeue()
// queueStack.dequeue()