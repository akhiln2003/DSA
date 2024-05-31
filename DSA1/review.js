


// class Node{
//     constructor(value){
//         this.data = value;
//         this.next = null;
//         this.prev = null;
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0;
//     }
//     append(value){
//         let node = new Node(value);
//         if(this.size == 0 ){
//             this.head = node
//         }else{
//             let current = this.head;
//             while(current.next){
//                 current = current.next;

//             }
//             current.next = node;
//             node.prev = current;
//         }
//         this.size++
//     }
//     print(){
//         if(this.size == 0 ){
//             return console.log("list is empty");
//         }else{
//             let out = '';
//             let current = this.head;
//             while(current){
//                 out += ` ${current.data}`
//                 current = current.next;
//             }
//             console.log(out);
//         }
//     }
//     remove(value){
//         if(this.size == 0){
//             return console.log("list is empyt ");
//         }else{
//             if(this.head.data == value){
//                 this.head = this.head.next
//                 this.size--;
//                 return
//             }else{

//                 let prev = this.head;
//                 while(prev && prev.next){
//                     if(prev.data == value ) {
//                           prev.prev.next = prev.next;
//                         this.size--;
//                         return
//                     }else{
//                         prev = prev.next;
//                     }
//                 }
//                 return console.log("value not fount");
//             }
//         }
//     }
// }


// const list = new linkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(6)
// list.print()
// list.remove(4)
// list.print()




// function sum(array,index = 0 ,out = 0){
//     if(index == array.length ){
//         return console.log(out);
//     }
//     out += array[index]
//     return sum(array,index+=1,out)
// }
// sum([1,2,3,4,5])