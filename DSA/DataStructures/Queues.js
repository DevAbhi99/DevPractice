//Queue is a linear datastructure which follows First In First Out method or Last In Last Out method

/*
Queue has given functions

1) enqueue(x) :- adds element  from the start of the data structure

2) dequeue() :- removes element from the start

3) size() :- return length of the queue

4) front() :- returns the first value of the queue

5) isEmpty() :- checks if the queue is empty
*/ 


class Queue{

    constructor(){
        this.items=[];
    }


    enqueue(x){
    
        this.items.push(x);
    }


    dequeue(){
        return this.items.shift();
    }


    isEmpty(){
        return this.items.length===0;
    }

    size(){
        return this.items.length;
    }

    front(){
        return this.items[0];
    }
}


const q=new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q);


q.dequeue();

console.log(q);


console.log(q.front());

console.log(q.size());

console.log(q.isEmpty());