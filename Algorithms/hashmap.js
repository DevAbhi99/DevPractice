//Hashmap is one of the most powerful datastructure which is widely used in development or solving dsa questions

//this data structure stores data in the form of key value pair
/*

//declaring hashmap
let map=new Map();

//set():- adding data 

map.set(1,2);

map.set('one', 'two');

map.set(3,true);

console.log(map);

//get(key):- accessing data through key

console.log(map.get('one'));

//has(key):- It is used to check if a key exists in the hashmap

console.log(map.has(1));

//delete(key):- delete data using key in hashmap

map.delete(1);

console.log(map);

//iteration through hashmap

for(let [k,v] of map){
    if(k==='one'){
        console.log(v);
    }
}


//Hashmap algorithm to count frequency of character

let arr=['a', 'b', 'a', 'c', 'b', 'a'];

let hm=new Map();

for(let ch of arr){
    if(hm.has(ch)){
        hm.set(ch,hm.get(ch)+1);
    }
    else{
        hm.set(ch,1);
    }
}

console.log(hm);*/


//Write a code to find highest frequency character in a string

let s='abacba';

let arr=s.split('');

let hm=new Map();

for(let ch of arr){
    if(hm.has(ch)){
        hm.set(ch, hm.get(ch)+1);
    }
    else{
        hm.set(ch,1);
    }
}

let max=0;
let maxch='';

for(let [k,v] of hm){

    if(max<v){
        max=v;
         maxch=k;
    }

}

console.log(`So the character with highest frequency is ${maxch} with frequency ${max}`);


//to find minimum frequency

let min=Infinity;
let minch='';

for(let [k,v] of hm){
    if(min>v){
        min=v;
        minch=k;
    }
}

console.log(`So the character with minimum frequency is ${minch} with frequency ${min}`);