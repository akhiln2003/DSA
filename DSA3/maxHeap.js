class MaxHeap{
    constructor(){
        this.heap = []
    }
    heapfyUp( currentIndx ){
        let maxHeap = this.heap;
        let parent = this.parent( currentIndx );
        while( currentIndx > 0 && maxHeap[ parent ] < maxHeap[ currentIndx ]){
            this.swap( currentIndx , parent );
            currentIndx = parent;
            parent = this.parent( currentIndx );
        }
        
    }
    heapfydown( currentIndx  ){
        let maxHeap = this.heap;
        let last = maxHeap.length - 1;
        let leftChild = this.leftChild( currentIndx );
        let rightChild = this.rightChild( currentIndx );
        while( currentIndx <= last ){
            let swap = leftChild;
            if( maxHeap[leftChild] < maxHeap[rightChild] ){
                swap = rightChild;
            }
            if( maxHeap[ currentIndx ] < maxHeap[ swap ] ){
                this.swap( currentIndx  , swap );
                currentIndx = swap;
                leftChild = this.leftChild( currentIndx );
                rightChild = this.rightChild( currentIndx );
            }else{
                return
            }
        }
    }
    insertion( value ){
        let maxHeap = this.heap;
        maxHeap.push( value );
        this.heapfyUp( maxHeap.length - 1)
    }
    remove(){
        let maxHeap = this.heap;
        this.swap( 0 , maxHeap.length - 1 );
        maxHeap.pop()
        this.heapfydown( 0 )
    }
    arrayToHeap( array ){
        this.heap = array;
        let parent = this.parent( this.heap.length - 1);
        for( let i = parent; i >= 0; i-- ){
            this.heapfydown(i)
        }
    }
    parent( index ){
        return ( index - 1 ) / 2
    }
    leftChild( index ){
        return (2 * index ) + 1
    }
    rightChild( index ){
        return ( 2 * index ) + 2
    }
    swap( value , value1 ){
        let maxHeap = this.heap;
       return [ maxHeap[ value1 ] , maxHeap[ value ] ] = [ maxHeap[ value ] , maxHeap[ value1 ] ]
    }
    display(){
        console.log(this.heap);
    }
}
const maxHeep = new MaxHeap()
// maxHeep.insertion(0)
// maxHeep.insertion(4)
// maxHeep.insertion(8)
// maxHeep.insertion(11)
// maxHeep.display()
// maxHeep.remove()
// maxHeep.arrayToHeap([4,6,0,11,6,8,])
maxHeep.display()