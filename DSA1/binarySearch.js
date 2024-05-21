
function binarySearch(array,target){
    let leftIndex = 0 ;
    let rightIndex = array.length-1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        if(array[middleIndex] == target ){
            return middleIndex
        }
        if(target < array[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex  + 1
        }  
    }
    return ' value is not found'
}
console.log(binarySearch([1,2,3,4],0));