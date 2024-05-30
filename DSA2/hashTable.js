class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hashing(key) {
        let hashedkey = 0
        for (let i = 0; i < key.length; i++) {
            hashedkey += key.charCodeAt(i)
        }
        return hashedkey % this.size;
    }
    set(key, value) {
        let index = this.hashing(key);
        if (!this.table[index]) {
            this.table[index] = []
        }
        let bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                return bucket[i][1] = value;
            }
        }
        bucket.push([key, value]);
    }
    get(key) {
        let index = this.hashing(key);
        let bucket = this.table[index];
        if (!bucket) {
            return "invalid key";
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] == key) {
                return bucket[i][1]
            }
        }
        return " invalid key "
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(this.table[i]);
            }
        }
    }
    remove( key ) {
        let index = this.hashing( key );
        let bucket = this.table[ index ];
        if( !bucket ) {
            return console.log( " the key is empty ");
        }
        for( let i = 0; i < bucket.length; i++ ) {
            if( bucket[i][0] == key ) {
                 console.log(` removed ${ bucket}`);
                  bucket.splice(i,1);
            }
        }
        return console.log( " the key is invalid ");
    }
}
const table = new hashTable(3);
table.set("name", 'akhil')
table.set("age", 40)
table.set("place", "feroke")
table.display()
table.remove( "name")
table.display()