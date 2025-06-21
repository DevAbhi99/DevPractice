// In oops we will learn about classes and how to create functions and how using this paradigm makes programming easier

//classes can be considered as objects for large codes. class man can be considered as an object with name and age as parameters while work is a method


class Man{

name;
age;

constructor(name,age){          //constructor is a special function which is used to initialize values to an object when it is created. Constructor is created when an object is called
    this.name=name;
    this.age=age;
}

work(){
    return `Hi, I am ${this.name}, my age is ${this.age} and I am a software engineer`;
}


}

//accessing properties and methods in class man we need to create object



let obj=new Man('Karan', 26); 

console.log(obj.work());