//                 // Linear search 
// function recursiveLinearSearch( array , target ){
//     return linearSearch( array , target , 0 )
// }
// function linearSearch( array , target , index ){
//     if(index == array.length ){
//         return console.log(" value is not in the array ");
//     }
//     if( array[index] == target ){
//         return console.log(index);
//     }
//     else{ 
//         return linearSearch( array , target , index+=1 )
//     }
// }
// recursiveLinearSearch([1,2,4,5,3,6,8,7,9],4)








                // Binery search 
// function  recursiveBinerySearch(array,target){
//     return binarySearch( array , target , 0 , array.length-1 )
// }
// function binarySearch( array , target , leftInd , rightIndex ){ 
//     if( leftInd > rightIndex ){
//         return console.log(" value is not in this array");
//     }
//     let middleIndex = Math.floor( ( leftInd + rightIndex ) / 2 );
//     if(array[middleIndex] == target ){
//         return console.log( middleIndex );
//     }
//     if( target < array[middleIndex] ){
//         return binarySearch( array , target , leftInd , middleIndex-1 );
//     }else{
//         return binarySearch( array , target , middleIndex+1 , rightIndex )
//     }
// }
// recursiveBinerySearch([1,2,3,4,5,6,7,8],5)





            // Reverse a string 
// function recursiveReverseString( string ){
//     if(string === ''){
//         return '';
//     }
//     return recursiveReverseString( string.substring(1))+ string.charAt(0)
// }
// console.log(recursiveReverseString("akhil"));







            // Fibonacci sequence
// function recursiveFibonacci(n){
//     let fib = [0,1];
//     let index = 2;
//     if( n <= 0 ){
//         return " not valid numbet ";
//     }
//     if( n < 3 ){
//         return fib.slice(0,n);
//     }
//     return loop(fib,index,n)
// }
// function loop( array , index , target ){
//     if(index == target ){
//         return array
//     }else{
//         array[index] = array[ index - 1 ] + array[ index - 2 ];
//         return loop( array , index += 1 , target );
//     }
// }
// console.log(recursiveFibonacci(5));