class HashTable {
    constructor(size){
        this.data = new Array(size);
    }
    hashFunction(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            // Transform the key into a static hash only
            hash = (hash + key.charCodeAt(i)*i) % this.data.length;
            
        }
        return hash;
    }
    set(key, value){
        const address = this.hashFunction(key);
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key,value])
        return this.data;
    }

}

myHashTable = new HashTable(50)