

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