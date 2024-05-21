
                // PRIME NUMBER 
// function isPrime(n){
//     if(n<2){
//         return console.log(false);
//     }

//      for(i=2;i<=n/2;i++){
//         if(n%i==0){
//           return console.log( false);
//         }else{
//            return console.log(true);
//         }
//     }
// }
// isPrime(90)



                // POWER OF TWO 
// function isPowerOfTwo(n) {
//     if (n <= 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 == 0) {
//             return false
//         }
//         n /= 2;
//         return true
//     }
// }

// console.log(isPowerOfTwo(1));



// function test(n){
//     if(n <= 1 ){
//         return 1
//     }
//    return n*test(n-1)
// }
// console.log(test(0));



// function binarySearch(array,target){
//         let leftInd = 0;
//         let rightInd = array.length-1 ;
//         while(leftInd <= rightInd ){
//                 let midInd = Math.floor((leftInd+rightInd)/2);
//                 if(target == array[midInd]){
//                         return midInd
//                 }
//                 if(target > array[midInd]){
//                         leftInd  = midInd+1
//                 }else{
//                         rightInd = midInd-1
//                 }
//         }
//         return "value not fount"
// }
// console.log(binarySearch([1,2,3,4,5,6,7],5))



