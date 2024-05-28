

// function selectionSort( array ){
//     let n = array.length-1;
//     for( let i = 0; i < n; i++ ){
//         let min = i;
//         for( let j = i+1; j <= n; j++ ){
//             if(array[min] > array[j] ){
//                 min = j;
//             }
//         }
//         if( i != min ){
//             [array[i], array[min]] = [array[min], array[i]]; 
//         }
//     }
//     return console.log(array);
// }
// selectionSort([9,8,7,6,5,4,3,2,1])







// function buble(array){
//     for( let i = 0; i < array.length; i++ ){
//         for( let j = 0; j <= (array.length-1)-i; j++ ){
//             if(array[j] > array[j+1]){
//                 [array[j],array[j+1]] = [array[j+1],array[j]]
//             }
//         }
//     }
//     return console.log(array);
// }
// buble([9,8,7,6,5,2,4,5]);



// function selection(array){ 
//     for( let i = 0; i < array.length; i++ ){
//         let min = i ;
//         for( let j = i+1; j < array.length; j++){
//             if(array[min] > array[j]){
//                 min = j;
//             }
//         }
//         if(min != i ){
//             [array[i] , array[min] ] = [array[min] , array[i]]
//         }
//     }
//     return console.log(array);
// }
// selection([3,2,4,1,5,9,6,7])








// function insertionSort( array ){
//     for( let i = 1; i < array.length; i++ ){
//         let index = i - 1;
//         let value = array[i]
//         while (index >= 0 && value < array[index] ){
//             array [ index + 1 ] = array[ index];
//             index--;
//         }
//             array[index + 1 ] =value;
//     }
//     return console.log(array);
// }
// insertionSort([2,3,1,5,9,4,6,0,12,90])










//     function quickSort( array ){
//         if( array.length < 2 ){
//             return array;
//         }
//         let pivot = array[array.length-1];
//         let left = [];
//         let right = [];
//         for( let i = 0; i < array.length-1; i++ ){
//             if( array[i] < pivot ){
//                 left.push(array[i]);
//             }else{
//                 right.push(array[i])
//             }
//         }
//         // console.log([ ...left ,"left" , pivot,"p" , ...right, "right" ] , "ond");
//         return  quickSort(left).concat(pivot , quickSort(right) );
//     }
// console.log(quickSort([8,7,2,5,4,3,1,6]));








// function meargeSort( array ){
//     if( array.length < 2 ){
//         return array;
//     }
//     let mid = Math.floor( array.length / 2 );
//     let left = array.slice( 0 , mid );
//     let right = array.slice( mid );
//     return mearge( meargeSort( left ) , meargeSort( right ) );
// }
// function mearge( left , right ) {
//     const sortedArray = [];
//     while( left.length && right.length ){
//         if(left[ 0 ] <= right[ 0 ]){
//             sortedArray.push(left.shift());
//         }else{
//             sortedArray.push(right.shift());
//         }
//     }
//     return [ ...sortedArray , ...left , ...right ];
// }
// console.log( meargeSort([8,7,6,5,4,3,2,1]));








// function bubbleSortDay2( array ){
//     for( let i = 0; i < array.length; i++ ){
//         for( let j = 0; j < array.length- i; j++){
//             if( array[ j ] > array[ j + 1 ] ){
//                 [ array[ j + 1] , array[ j ] ] = [ array[ j ] , array[ j + 1 ] ] 
//             }
//         }
//     }
//     return console.log( array );
// }
// bubbleSortDay2([8,7,16,5,4,3,2,1])







// function selectionDay2( array ){
//     for( let i = 0; i < array.length; i++ ){
//         let min = i;
//         for( let j = i+1; j < array.length; j++ ){
//             if(array[ min ] > array[ j ] ){
//                 min = j;
//             }
//         }
//         if(min != i ){
//             [ array[ min ] , array[ i ] ] = [ array[ i ] , array[ min ]];
//         }
//     }
//     return console.log( array );
// }
// selectionDay2([8,7,6,5,4,3,2,1])







// function insertionSortDay2( array ) {
//     for( let i = 1; i < array.length; i++ ) {
//         let index = i-1;
//         let value = array[ i ];
//         while( index >= 0 && value < array[ index ]  ){
//             array[ index + 1 ] = array[ index ];
//             index--;
//         }
//         array[ index + 1 ] = value;
//     }
//     return console.log( array );
// }
// insertionSortDay2([8,-7,6,5,4,30,2,1])









// function quickSortDay2( array ) {
//     if( array.length <= 1 ){
//         return array
//     }
//      let pivot =  array[array.length-1];
//      let right = [];
//      let left = []
//      for( let i = 0; i < array.length-1; i++ ){
//         if( array[i] > pivot ){
//             right.push(array[i]);
//         }else{
//             left.push( array[i]);
//         }
//      }
//      return quickSortDay2(left).concat(pivot,quickSortDay2(right))
// }
// console.log(quickSortDay2([5,4,2,8,0,9,1,-2,55,6]));







// function meargeSortDay2( array ){
//     if( array.length < 2 ){
//         return array
//     }
//     let mid = Math.floor( array.length / 2 );
//     let left = array.slice(0,mid);
//     let right = array.slice(mid);
//     return mearge( meargeSortDay2(left) , meargeSortDay2(right))
// }
// function mearge( leftArray , rightArray ) {
//     const sortedArray = [];
//     while( leftArray.length && rightArray.length ){
//         if( leftArray[0] <= rightArray[0]) {
//             sortedArray.push(leftArray.shift());
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [ ...sortedArray , ...leftArray , ...rightArray]
// }
// console.log(meargeSortDay2([5,3,2,8,7,0,9,1,-22]));