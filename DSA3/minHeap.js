class MinHeep{
    constructor(){
        this.heep = []
    }
    heapifyDown( currentIndx ){
        let minHeap = this.heep;
        let endIndex = minHeap.length - 1;
        let leftChild = this.leftChild( currentIndx );
        let rightChild = this.rightChild( currentIndx );
        while( leftChild <= endIndex){
            let seapVal = leftChild;
            if( minHeap[ leftChild] > minHeap[rightChild]){
                seapVal = rightChild;
            }
            if( minHeap[ currentIndx ] > minHeap[seapVal]){
                this.swap( currentIndx , seapVal );
                currentIndx = seapVal;
                leftChild = this.leftChild( currentIndx );
                rightChild = this.rightChild( currentIndx )
            }else{
                return
            }
        }
    }
    heapifyUp( currentIndx ){
        let minHeap = this.heep;
        let parentIndx = this.parent(currentIndx)
        while( currentIndx > 0 && minHeap[ currentIndx ] < minHeap[ parentIndx]){
            this.swap( currentIndx , parentIndx )
            currentIndx = parentIndx;
            parentIndx = this.parent( currentIndx )
        }
    }
    insert( value ){
        let root = this.heep;
        root.push( value );
        this.heapifyUp(root.length - 1 );

    }
    remove(){
        let minHeap = this.heep;
        this.swap( 0 , minHeap.length-1 )
        minHeap.pop()
        this.heapifyDown(0)
    }
    arrayToMinHeep( array ){
        this.heep = array;
        let lastParent = this.parent( this.heep.length - 1);
        for( let i = lastParent ; i >= 0; i-- ){
            this.heapifyDown( i )
        }
    }
    heapSort( array ){
        let out = [];
        this.arrayToMinHeep( array );
        let minHeap = ths.root;
        while( minHeap.length > 0 ){
             out.push( minHeap[0]);
             this.remove( this.root );

        }
        return out;
    }
    leftChild( index ){
       return  (2 * index) + 1;
    }
    rightChild( index ){
        return ( 2 * index ) + 2;
    }
    parent( index ){
        return   Math.floor((index - 1) / 2);
    }
    swap( value , value1 ){
        let minHeep = this.heep;
        [ minHeep[value1] , minHeep[value] ] = [ minHeep[value] , minHeep[value1]]
    }
    display() {
        console.log(this.heep)
    }
}
const heep = new MinHeep()
heep.insert(5)
heep.arrayToMinHeep([9,8,7,6,0,54])
heep.display()