//Hashmap is a datastructure which stores data in key value pair where key has to be unique and values can have duplicate values


//declaring the map

let hashmap=new Map();

//1) set(key, value) :- adds data to hashmap

hashmap.set(1,'one');

hashmap.set(2,'two');

hashmap.set(3,'three');


//2) get(key) :- gets the corresponding value to the key mentioned

console.log(hashmap.get(3));

//3) delete(key) :- removes element on the basis of the key mentioned

hashmap.delete(3);

console.log(hashmap);

//4) has():- Checks if the key and the corresponding value exists in the hashmap

console.log(hashmap.has(3));


//5) size:- returns length of the hashmap

console.log(hashmap.size);

//6) clear():-  deletes the entire hashmap


hashmap.clear();

console.log(hashmap);


//Algorithm to count frequency using hashmap

let s='abbcccdddd';

let arr=[];

arr=s.split('');


let hash=new Map();

for(let ch of arr){
    if(hash.has(ch)){
        hash.set(ch, hash.get(ch)+1);
    }
    else{
        hash.set(ch,1);
    }
}

console.log(hash);


//Implementation of hashmap using array


class HashMap{


    constructor(){
        this.items=[];
    }

    set(x,y){

        let arr=[x,y];

        this.items.push(arr);
    }

    get(x){

        for(let i=0;i<this.items.length;i++){
            if(this.items[i][0]===x){
                return this.items[i][1];
            }
        }
    }


    delete(x){

        for(let i=0;i<this.items.length;i++){
            if(this.items[i][0]===x){
                this.items.splice(i,1);
                return true;
            }
        }
        return false;
    }

size(){
    return this.items.length;
}

has(x){

    for(let i=0;i<this.items.length;i++){
        if(this.items[i][0]===x){
            return true;
        }
    }

    return false;
}


clear(){
    this.items=[];
}



}


const hm=new HashMap();



//1) set(key, value) :- adds data to hashmap

hm.set(1,'one');

hm.set(2,'two');

hm.set(3,'three');


//2) get(key) :- gets the corresponding value to the key mentioned

console.log(hm.get(3));

//3) delete(key) :- removes element on the basis of the key mentioned

hm.delete(3);

console.log(hm);

//4) has():- Checks if the key and the corresponding value exists in the hashmap

console.log(hm.has(3));


//5) size:- returns length of the hashmap

console.log(hm.size());

//6) clear():-  deletes the entire hashmap


hm.clear();

console.log(hm);
