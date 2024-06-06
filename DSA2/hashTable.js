// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }
//     hashing( key ) {
//         let hashedkey = 0
//         for (let i = 0; i < key.length; i++) {
//             hashedkey += key.charCodeAt(i)
//         }
//         return hashedkey % this.size;
//     }
//     set(key, value) {
//         let index = this.hashing(key);
//         if (!this.table[index]) {
//             this.table[index] = []
//         }
//         let bucket = this.table[index];
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] == key) {
//                 return bucket[i][1] = value;
//             }
//         }
//         bucket.push([key, value]);
//     }
//     get(key) {
//         let index = this.hashing(key);
//         let bucket = this.table[index];
//         if (!bucket) {
//             return "invalid key";
//         }
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0] == key) {
//                 return bucket[i][1]
//             }
//         }
//         return " invalid key "
//     }
//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(this.table[i]);
//             }
//         }
//     }
//     remove( key ) {
//         let index = this.hashing( key );
//         let bucket = this.table[ index ];
//         if( !bucket ) {
//             return console.log( " the key is empty ");
//         }
//         for( let i = 0; i < bucket.length; i++ ) {
//             if( bucket[i][0] == key ) {
//                  console.log(` removed ${ bucket}`);
//                   bucket.splice(i,1);
//             }
//         }
//         return console.log( " the key is invalid ");
//     }
// }
// const table = new hashTable(3);
// table.set("name", 'akhil')
// table.set("age", 40)
// table.set("place", "feroke")
// table.display()
// table.remove( "name")
// table.display()







                // Resizing
// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//         this.count = 0;
//     }
//     hash(key) {
//         let out = 0;
//         if (typeof key === "string" ) {
//             for (let i = 0; i < key.length; i++) {
//                 out += key.charCodeAt(i);
//             }
//         }else out = key
       
//         return out % this.size

//     }
//     set(key, value) {
//         const loadfacotr = this.count / this.size;
//         if (loadfacotr > 0.7)  this.resize()
//         let index = this.hash(key);
//         if (!this.table[index]) {
//             this.table[index] = [];
//         }
//         let bucket = this.table[index];
//         bucket.push( [key , value ])
//         this.count++
//     }
//     resize() {
//         let oldtable = this.table;
//         this.size = this.size * 2;
//         this.table = new Array(this.size);
//         this.count =0
//         for (let i = 0; i < oldtable.length; i++) {
//             if (oldtable[i]) {
//                 for ( let j = 0; j < oldtable[i].length; j++ )
//                this.set(oldtable[i][j][0],oldtable[i][j][1])     
//             }
//         }



//     }
//     dis(){
//         console.log(this.table);
//     }
// }
// const tab = new hashTable( 10 );
// tab.set(0 ,"akhil")
// tab.set(1,"sahal")
// tab.set(2,"a")
// tab.set(3,"a")
// tab.set(4,"a")
// tab.set(5,"a")
// tab.set(6,"a")
// tab.set(7,"a")
// tab.set(8,"a")
// tab.dis()








class hashTable{
    constructor( size ){
        this.table = new Array( size );
        this.size = size;
        this.count = 0;
    }
    hash( key ){
        let out = 0;
        if( typeof key == ''){
            
        for( let i = 0; i < key.length; i++ ){
            out += key.charCodeAt(i);
        }
        return out % this.size;
        }
        return key % this.size;
    }
    resize(){
        let oldTable = this.table;
        this.size *= 2;
        this.table = new Array( this.size );
        
        for( let i = 0; i < oldTable.length; i++ ){
            if( oldTable[i] ){
                
            for( let j = 0; j < oldTable[i].length; j++ ){
                if( oldTable[i][j][0] ){
                    this.set(oldTable[i][j][0] , oldTable[i][j][1])
                }
            }
            }
        }
    }
    set( key , value ){
        const loadFactor = this.count / this.size
        if( loadFactor > 0.7 ){
            this.resize()
        }
        let index = this.hash( key );
        if( !this.table[ index ] ){
            this.table[ index ] = []
        }
        let bucket = this.table[ index ];
        for( let i = 0 ; i < bucket.length; i++ ){
            if( bucket[ i ][ 0 ] == key ){
              return  bucket[ i ][ 1 ]  = value;
            }
        }
        bucket.push( [ key , value ] )
        this.count++;
    }
    get( key ){
        let index = this.hash( key );
        if( !this.table[ index ]){
            return console.log( " the key is invalid " );
        }
        let bucket = this.table[ index ];
        for( let i = 0; i < bucket.length; i++ ){
            if( bucket[i][0] == key ){
                return console.log( bucket[i][1])
            }
        }
        return console.log( " invalid key ")
    }
    remove( key ){
        let index = this.hash( key );
        if( !this.table[ index ]){
            return console.log( " the key is invalid " );
        }
        let bucket = this.table[ index ];
        for( let i = 0; i < bucket.length; i++ ){
            if( bucket[i][0] == key ){
                 console.log("removed : "+ bucket[i])
                 bucket.splice( i , 1)
                 this.count--;
            }
        }
        return console.log( " invalid key ")
    }
    dis(){
        console.log( this.table )
    }
    
}
const hashtable = new hashTable( 10 )
hashtable.set(0,"a")
hashtable.set(1,"a")
hashtable.set(2,"a")
hashtable.set(3,"a")
hashtable.set(4,"a")
hashtable.set(5,"a")
hashtable.set(6,"a")
hashtable.set(7,"a")
hashtable.set(8,"a")
hashtable.dis()
hashtable.remove(0)
hashtable.dis()

hashtable.get(0)