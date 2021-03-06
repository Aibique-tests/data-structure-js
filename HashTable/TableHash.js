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
    get(key){
        const address = this.hashFunction(key)
        const currentBucket = this.data[address]
        if(currentBucket){
            for(let i = 0 ; i < currentBucket.length ; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        else{
            return undefined
        }
    }
    delete(key){
        const address = this.hashFunction(key);
        const currentBucket = this.data[address];

        if(currentBucket){
            for(let i = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    delete currentBucket[i]
                }
            }
        }
        return this.data;
    }
    getKeys(){
        let allKeys = []
        for(let i = 0; i < this.data.length ; i++){
            if( this.data[i]){
                 allKeys.push(this.data[i])
            }
        }
        return allKeys
    }

}

myHashTable = new HashTable(50)