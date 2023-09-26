class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index]
    if(!bucket){
        this.table[index] = [[key,value]]
    }else{
        const sameKeyItem = bucket.find(item =>item[0]===key)
        if(sameKeyItem){
             sameKeyItem[1]=value
        }
        else{
            bucket.push([key,value])
        }
    }
  }
  get(key) {
    const index = this.hash(key);
    // console.log(this.table[index]);
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem = bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            console.log(sameKeyItem[1])
        }
    }
    return undefined
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index]
    if(bucket){
        const sameKeyItem =bucket.find(item=>item[0]===key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

let hash = new HashTable(50);
hash.set("name",'Reshma')
hash.set('age',26)
// hash.display()
// hash.get("age")
// hash.remove('name')
hash.set('eman','nithin')
// hash.remove('eman')
hash.get('eman')
// hash.display()
