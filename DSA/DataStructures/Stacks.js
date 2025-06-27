//Stack is a linear datastructure where elements are stacked on top of each other and follows First In Last Out or Last In First Out method

/*
Stack has following functions

1) push(element):- adds or pushed element at first

2) pop():- removes element from the last

3) size():- returns length of the stack

4) isEmpty():- checks if the stack is empty

5) top()/peek():- to check which element is on the top of the stack

*/

//Implementation of stack using array


class Stack{

constructor(){
    this.items=[];
}


push(x){

    this.items.push(x);

}

pop(){
    return this.items.pop();
}

size(){
    return this.items.length;
}

isEmpty(){
    return this.items.length===0;
}

peek(){

    return this.items[this.items.length-1];
}



}


const st=new Stack();


st.push(1);
st.push(2);
st.push(3);
st.push(4);

console.log(st);

st.pop();

console.log(st);

console.log(st.isEmpty());

console.log(st.size());

console.log(st.peek());
