            // creating , find the size amd checking is empty
// class Node {
//     constructor(value){
//         this.head = value;
//         this.next = null ;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0 ;
//     }
//     isEmpty(){
//         return this.size == 0 ;
//     }
//     getSize(){
//         return this.size;
//     }
// }
// let list = new LinkedList();
// console.log("List is empty ? " ,list.isEmpty());
// console.log("List size : ", list.getSize());







            // prepent
// class Node{
//     constructor(value){
//         this.data = value;
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size == 0 ;
//     }
//     getSize(){
//         if(this.isEmpty()){
//             return 0;
//         }
//         else{
//             return this.size;
//         }
//     }
//     prepend(value){
//      let node = new Node(value);
//      if(this.isEmpty()){
//         this.head = node;
//      }else{
//         node.next = this.head
//         this.head = node
//      }
//      this.size++
//     }
// }
// const list = new LinkedList()
// console.log(list.getSize()); // 0
// list.prepend(100); // add a node
// console.log(list.getSize()); // 1







        //  prinding 
// class Node{
//     constructor(value){
//         this.data = value;
//         this.next = null
//     }
// }
// class LinkedLIst{
//     constructor(){
//         this.head = null;
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size == 0;
//     }
//     getSize(){
//         if(this.isEmpty()){
//             return 0;
//         }else{
//             return this.size;
//         }
//     }
//     prepend(value){
//         let node = new Node(value);
//         if(this.isEmpty()){
//             this.head = node;
//         }else{
//             node.next = this.head;
//             this.head = node

//         }
//         this.size++
//     }
//     print(){
//         if(this.isEmpty()){
//             console.log("the list is empty");
//         }else{
//         let out = ''
//         let current = this.head;
//         while(current){
//            console.log(current);
//            out+=`${current.data}`
//             current=current.next
//         }
//         console.log(out);
//         }
//     }
// }
// const list = new LinkedLIst()
// list.print();
// list.prepend(10);
// list.print()







            // APPEND
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedList{
//         constructor(){
//                 this.head = null;
//                 this.size = 0;
//         }
//         isEmpty(){
//                 return this.size == 0 ;
//         }
//         getSize(){
//                 if(this.isEmpty()){
//                         return 0;
//                 }else{
//                         return this.size;
//                 }
//         }
//         print(){
//                 if(this.isEmpty()){
//                         console.log("this list is empty");
//                 }else{
//                         let out = ''
//                         let current = this.head;
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current=current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         prepend(value){
//                 let node = new Node(value);
//                 if(this.isEmpty()){
//                         this.head = node;
//                 }else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++
//         }
//         append(value){
//                 let node = new Node(value)
//                 if(this.isEmpty()){
//                          this.head = node;
//                 }else{ 
//                         let end = this.head;
//                         while(end.next){
//                         end = end.next;
//                  }
//                 end.next = node; 
//         }
//                 this.size++;
//         }
// }
// const list = new LinkedList()
// list.prepend(9)
// list.append(90)
// list.print();





            // INSERT A VALUE IN A GIVEN INDEX
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedLIst{
//         constructor(){
//                 this.head = null;
//                 this.size =  0;
//         }
//         isEmpty(){
//                 return this.size == 0;
//         }
//         getSize(){
//                 if(this.isEmpty()){
//                         return 0;
//                 }else{
//                         return this.size;
//                 }
//         }
//         print(){
//                 if(this.isEmpty()){
//                         console.log('this list is empty');
//                 }else{
//                         let out = '';
//                         let current = this.head;
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value)
//                 if(this.isEmpty()){
//                          this.head = node;
//                 }else{ 
//                         let end = this.head;
//                         while(end.next){
//                         end = end.next;
//                  }
//                 end.next = node; 
//         }
//                 this.size++;
//         }
//         prepend(value){
//                 let node = new Node(value)
//                 if(this.isEmpty()){
//                         this.head = node;
//                 }else{
//                         node.next = this.head;
//                         this.head=node;
//                 }
//                 this.size++;
//         }
//        insert( value , index ){
//         if(index < 0 || index > this.size){
//                 return console.log(" this index is not valid");
//         }
//         if(index == 0){
//                 this.prepend(value)
//         }else{
//                 let node = new Node(value);
//                 let prev = this.head;
//                 for(let i=0; i<index-1; i++ ){
//                         prev = prev.next;
//                 }
//                 node.next =  prev.next;
//                 prev.next = node;
//         }
//        }
// }
// const list = new LinkedLIst()
// list.append(90)
// list.append(0)
// list.prepend(8)
// list.insert(40,1)
// list.print()
// console.log(list.getSize());






                //  REMOVIE ELEMENT USING INDEX
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null
//         }
// }
// class LinkedLIst{
//         constructor(){
//                 this.head = null;
//                 this.size = 0;
//         }
//         isEmpty(){
//                 return this.size == 0;
//         }
//         getSize(){
//                 if(this.isEmpty()){
//                         return 0;
//                 }else{
//                         return this.size;
//                 }
//         }
//         print(){
//                 if(this.isEmpty()){
//                   console.log("this list is empty");
//                 }else{
//                         let out = '';
//                         let current = this.head;
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         prepend(value){
//                 let node = new Node(value);
//                 if(this.isEmpty()){
//                         this.head = node
//                 }else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++;
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.isEmpty()){
//                         this.head = node;
//                 }else{
//                         let current = this.head;
//                         while(current.next){
//                                current = current.next ;
//                         }
//                         current.next = node;
//                 }
//                 this.size++;
//         }
//         insert(value , index){
//                 if(index < 0 || index > this.size ){
//                         return console.log(" This lndex is not valid");
//                 }else{
//                         if(index == 0 ){
//                                 this.prepend(value)
//                         }else{
//                                 let node = new Node(value);
//                                 let prev = this.head;
//                                 for(let i = 0 ; i< index-1 ; i++){
//                                         prev = prev.next;
//                                 }
//                                 node.next = prev.next;
//                                 prev.next = node;
//                                 this.size++;
//                         }                     
//                 }
//         }
//         removeInd(index){
//                 if(index < 0 || index >= this.size || index == undefined){
//                         return console.log("this index is invalid");
//                 }
//                         let remove;
//                         if(index == 0 ){
//                                 remove = this.head;
//                                 this.head =  this.head.next;
//                         }else{
//                                 let prev = this.head;
//                                 for(let i = 0; i < index-1; i++){
//                                         prev = prev.next;
//                                 }
//                                 remove = prev.next;
//                                 prev.next = remove.next;
//                         }
//                         this.size--;
//                         console.log(remove.data);
//                 }
//         }
// const list = new LinkedLIst()
// list.insert(9,0)
// list.insert(1,1)
// list.insert(90,2)
// list.insert(79,3)
// list.insert(22,4)
// list.insert(5,5)
// list.print()
// list.removeInd()
// list.print()







                // removing value using given value..
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedLIst{
//         constructor(){
//                 this.head = null;
//                 this.size = 0;
//         }
//         isEmpty(){
//                 return this.size == 0;
//         }
//         getSize(){
//                 if(this.isEmpty()){
//                         return 0;
//                 }else{
//                         return this.size;
//                 }
//         }
//         print(){
//                 if(this.isEmpty()){
//                         return console.log(" This list is empty");
//                 }else{
//                         let current = this.head;
//                         let out = '';
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.isEmpty()){
//                         this.head = node;
//                 }else{
//                         let current = this.head;
//                         while(current.next){
//                                 current = current.next
//                         }
//                         current.next = node;
//                 }
//                 this.size++
//         }
//         prepend(value){
//                 let node = new Node(value);
//                 if(this.isEmpty()){
//                         this.head = node;
//                 }else{
//                       node.next = this.head;
//                       this.head = node;  
//                 }
//                 this.size++
//         }
//         insert(value,index){
//                 if(index < 0 || index >this.size){
//                         return console.log("This index is not valid");
//                 }else{
//                     if(index == 0)    {
//                         this.prepend(value)
//                     }else{
//                         let node = new Node(value);
//                         let prev = this.head;
//                         for(let i = 0; i < index-1; i++){
//                                 prev = prev.next
//                         }
//                         node.next = prev.next;
//                         prev.next = node                     
//                     }
//                     this.size++;
//                 }
//         }
//         removeToIndex(index){
//                 if(index < 0 || index > this.size || index == undefined ){
//                         return console.log("The index is not valid");
//                 }else{
//                         if(index == 0 ){
//                                 this.head = this.head.next
//                         }else{
//                                 let prev = this.head;
//                                 for( let i = 0; i < index-1; i++){
//                                         prev.prev.next;
//                                 }
//                                 prev.next = prev.next.next
//                         }
//                         this.size--;
//                 }
//         }
//         removeToValue(value){
//                 if(this.isEmpty()){
//                         return console.log("This list is empty");
//                 }else{
//                        if(this.head.data == value){
//                          this.head = this.head.next;
//                        }else{
//                         let prev = this.head;
//                         while(prev.next && prev.next.data !== value){
//                                 prev = prev.next;
//                         }
//                         if(prev.next){
//                                 prev.next = prev.next.next
//                         }
//                         else{
//                                 return console.log("value is not fount");
//                         }
//                        }
//                         this.size--;
//                 }
//         }
// }
// const list = new LinkedLIst()
// list.append(1)
// list.append(5)
// list.insert(0,1)
// list.removeToValue(5)
// list.print()







                // Linear Search 
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedLIst{
//         constructor(){
//                 this.head = null;
//                 this.size = 0;
//         }
//         print(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let current = this.head;
//                         let out = ''
//                         while(current.next){
//                                 out += ` ${current.data}`
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         prepend(value){
//                 let node = new Node(value);
//                 if(this.size == 0){
//                         this.head = node;
//                 }
//                 else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++
//         }
//         search(value){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let current = this.head;
//                         while(current){
//                                 if(current.data == value){
//                                         return console.log(true);
//                                 }else{
//                                         current = current.next;
//                                 }
//                         }
//                         return console.log(false);
//                 }
//         }
// }
// const list = new LinkedLIst()
// list.prepend(8)
// list.prepend(7)
// list.prepend(6)
// list.prepend(5)
// list.prepend(4)
// list.prepend(3)
// list.prepend(2)
// list.prepend(1)
// list.print()
// list.search(50)






                // Reverse list
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedLIst{
//         constructor(){
//                 this.head = null;
//                 this.size = 0;
//         }
//         print(){
//                 if(this.size == 0){
//                         return console.log("This list is empyt");
//                 }else{
//                         let out = '';
//                         let current = this.head;
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.size == 0){
//                         this.head = node;
//                 }else{
//                         let current = this.head;
//                         while(current.next){
//                                 current = current.next;
//                         }
//                         current.next = node;
//                 }
//                 this.size++;
//         }
//         reverse(){
//                 if(this.size == 0){
//                         return console.log("This list is empyt");
//                 }else{
//                         let prev = null;
//                         let current = this.head;
//                         while(current){
//                                 let nextNode = current.next;
//                                 current.next = prev;
//                                 prev = current;
//                                 current = nextNode;
//                         }
//                         this.head = prev
//                 }
//         }
// }
// const list = new LinkedLIst()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// list.append(6)
// list.print()
// list.reverse()
// list.print()






                // Use tail and removeFrom last and start. append , prepend
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null;
//         }
// }
// class LinkedList{
//         constructor(){
//                 this.head = null;
//                 this.tail = null;
//                 this.size = 0;
//         }
//         print(){
//                 if(this.size == 0){
//                         return console.log("This list is empyt");
//                 }else{
//                         let current = this.head;
//                         let out = '';
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;
//                 }
//                 else{
//                         this.tail.next = node;
//                           this.tail = node
//                 }
//                 this.size++;
//         }
//         prepend(value){
//                 let node = new Node(value)
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;   
//                 }else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++;
//         }
//         removeFist(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value = this.head;
//                         this.head = this.head.next
//                         this.size--;
//                         return console.log(value.data);
//                 }
//         }
//         removeLast(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value ;
//                         if(this.size == 1){
//                                 value = this.tail;
//                                 this.head = null;
//                                 this.tail = null;
//                         }else{
//                                 let prev = this.head;
//                                 while(prev.next != this.tail)   {
//                                    prev = prev.next;
//                                 }
//                                 value = prev.next
//                                 prev.next = null;
//                                 this.tail = prev;      
//                         }
//                      this.size--;
//                      return console.log(value.data);
//                 }
//         }
// }
// const list = new LinkedList()
// list.prepend(3)
// list.prepend(2)
// list.prepend(1)
// list.append(5)
// list.print()
// list.removeLast()
// list.print()





                // Find middile value
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null
//         }
// }
// class LinkedList{
//         constructor(){
//                 this.head = null;
//                 this.tail = null;
//                 this.size = 0;
//         }
//         print(){
//                 if(this.size == 0){
//                         return console.log("This list is empyt");
//                 }else{
//                         let current = this.head;
//                         let out = '';
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;
//                 }
//                 else{
//                         this.tail.next = node;
//                           this.tail = node
//                 }
//                 this.size++;
//         }
//         prepend(value){
//                 let node = new Node(value)
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;   
//                 }else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++;
//         }
//         removeFist(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value = this.head;
//                         this.head = this.head.next
//                         this.size--;
//                         return console.log(value.data);
//                 }
//         }
//         removeLast(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value ;
//                         if(this.size == 1){
//                                 value = this.tail;
//                                 this.head = null;
//                                 this.tail = null;
//                         }else{
//                                 let prev = this.head;
//                                 while(prev.next != this.tail)   {
//                                    prev = prev.next;
//                                 }
//                                 value = prev.next
//                                 prev.next = null;
//                                 this.tail = prev;      
//                         }
//                      this.size--;
//                      return console.log(value.data);
//                 }
//         }
//         findMid(){
//                 if(this.size == 0){
//                         return console.log("The list is empty");
//                 }else{
//                         if(this.head.next == null){
//                                 return console.log(this.head.data);
//                         }else{
//                                 let slow = this.head;
//                                 let fast = this.head;
//                                 while( fast && fast.next){
//                                         slow = slow.next
//                                         fast = fast.next.next
//                                 }
//                                 return console.log(slow.data);
//                         }
//                 }
//         }
// }
// const list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(6)
// list.print()
// list.findMid()






            // Delete middile value
// class Node{
//         constructor(value){
//                 this.data = value;
//                 this.next = null
//         }
// }
// class LinkedList{
//         constructor(){
//                 this.head = null;
//                 this.tail = null;
//                 this.size = 0;
//         }
//         print(){
//                 if(this.size == 0){
//                         return console.log("This list is empyt");
//                 }else{
//                         let current = this.head;
//                         let out = '';
//                         while(current){
//                                 out += ` ${current.data}`;
//                                 current = current.next;
//                         }
//                         console.log(out);
//                 }
//         }
//         append(value){
//                 let node = new Node(value);
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;
//                 }
//                 else{
//                         this.tail.next = node;
//                           this.tail = node
//                 }
//                 this.size++;
//         }
//         prepend(value){
//                 let node = new Node(value)
//                 if(this.size == 0 ){
//                         this.head = node;
//                         this.tail = node;   
//                 }else{
//                         node.next = this.head;
//                         this.head = node;
//                 }
//                 this.size++;
//         }
//         removeFist(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value = this.head;
//                         this.head = this.head.next
//                         this.size--;
//                         return console.log(value.data);
//                 }
//         }
//         removeLast(){
//                 if(this.size == 0){
//                         return console.log("This list is empty");
//                 }else{
//                         let value ;
//                         if(this.size == 1){
//                                 value = this.tail;
//                                 this.head = null;
//                                 this.tail = null;
//                         }else{
//                                 let prev = this.head;
//                                 while(prev.next != this.tail)   {
//                                    prev = prev.next;
//                                 }
//                                 value = prev.next
//                                 prev.next = null;
//                                 this.tail = prev;      
//                         }
//                      this.size--;
//                      return console.log(value.data);
//                 }
//         }
//         findMid(){
//                 if(this.size == 0){
//                         return console.log("The list is empty");
//                 }else{
//                         if(this.head.next == null){
//                                 return console.log(this.head.data);
//                         }else{
//                                 let slow = this.head;
//                                 let fast = this.head;
//                                 let prev =  null
//                                 while( fast && fast.next){
//                                         prev = slow
//                                         slow = slow.next
//                                         fast = fast.next.next
//                                 }
//                                 prev.next = slow.next
//                         }
//                 }
//         }
// }
// const list = new LinkedList()
// list.append(1)
// list.append(2)
// list.append(3)
// list.append(4)
// list.append(5)
// list.print()
// list.findMid()
// list.print()








class Node{
        constructor(value){
                this.data = value;
                this.next = null;
        }
}
class LinkedList{
        constructor(){
                this.head = null;
                this.tail = null;
                this.size = 0;
        }
        print(){
                if(this.size == 0){
                        return console.log("The list is empty");
                }else{
                        let current = this.head;
                        let out = ''
                        while(current){
                                out += ` ${current.data}`
                                current = current.next
                        }
                        console.log(out);
                }
        }
        append(value){
                let node = new Node(value);
                if(this.size == 0 ){
                        this.head = node;
                        this.tail = node;
                }else{
                        this.tail.next = node;
                        this.tail  = node;
                }
                this.size++
        }
        removeD(){
                if(this.size == 0){
                        return console.log("The list is empty");
                }else{
                        let prev = this.head;
                        let current = prev.next;
                        while(current){
                                if(prev.data == current.data){
                                       prev.next = current.next;
                                }else{
                                        prev = current
                                        current = current.next
                                }
                        }
                }
        }
}



const list = new LinkedList()
list.append(1)
list.append(2)
list.append(2)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.removeD()
list.print()