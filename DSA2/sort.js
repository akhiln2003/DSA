
// function bubbleSort(array){
//   let n = array.length-1;
//     for(let i = 0; i <= n; i++){
//         for( let j = 0; j <= n- i; j++){
//             if(array[j] > array[j+1]){
//                 let temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
//         }
//     }
//     return console.log(array);
// }
// bubbleSort([2,3,1,5,4,8,6])






// function insertionSort( array ){
//     for( let i = 1; i < array.length; i++ ){
//         let index = i-1;
//         let value = array[ i ];
//         while( index >= 0 && value < array[ index ]){
//             array[ index + 1 ] = array[ index ];
//             index--;
//         }
//         array[ index + 1 ] = value;
//     }
//     return console.log(array);
// }
// insertionSort([2,4,0,1,3,9,6,8]);








// function selectionSort(array){
//     let n = array.length-1;
//     let min;
//     for( let i = 0; i < n; i++){
//             min = i;
//         for( let j = i+1; j <= n; j++ ){
//             if(array[min] > array[j] ){
//                min = j
//             }
//         }
//         if( min != i ){
//             let temp = array[i];
//             array[i] = array[min];
//             array[min] = temp;
//         }
//     }
//     return console.log(array);
// }
// selectionSort([2,4,1,3,7,6,0,9]);








// function quickSort( array ) {
//     if( array.length < 2 ){
//         return array;
//     }
//     let pivot = array[ array.length -1 ];
//     let small = [];
//     let larg = [];
//     for( let i = 0; i < array.length - 1; i++ ) {
//         if( pivot > array[ i ] ) {
//             small.push( array[ i ]);
//         } else {
//           larg.push( array[ i ]);
//         }
//     }
//     return quickSort(small).concat( pivot , quickSort(larg) );
// }
// console.log(quickSort([2,4,3,1,6,5,9,0]));









// function mergeSort( array ) {
//     if( array.length < 2 ){
//         return array
//     }
//     let mid = Math.floor( array.length / 2 );
//     let leftArray = array.slice( 0 , mid );
//     let rightArray = array.slice( mid );
//     return merge( mergeSort(leftArray) , mergeSort(rightArray) );
// }
// function merge( leftArray , rightArray ) {
//     let sortedArray = [];
//     while( leftArray.length && rightArray.length ){
//         if( leftArray[0] > rightArray[0] ){
//             sortedArray.push(rightArray.shift());
//         }else{
//             sortedArray.push( leftArray.shift())
//         }
//     }
//     return [ ...sortedArray , ...leftArray , ...rightArray ]
// }
// console.log(mergeSort([82,73,6,5,42,3,-2,1]));
