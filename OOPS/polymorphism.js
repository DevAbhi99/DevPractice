// Polymorphism is a concept in javascript where one interface can take may forms. This concept is also known as method overloading.

class Animal{

   speak(){
    return 'Animal speaks';
   }
}

class Dog extends Animal{

    speak(){
        return 'Dog barks';
    }
}

class Cat extends Animal{
    speak(){
        return 'Cat meows';
    }
}

let obj1=new Animal();
let obj2=new Dog();
let obj3=new Cat();

console.log(obj1.speak());
console.log(obj2.speak());
console.log(obj3.speak());


//Showing method overloading 


class Calculator{

    calc(...args){

        if(args.length==2){
            if(args[1]!==0){
                return args[0]/args[1];  //showing division
            }
            else{
              return 'error';
            }
        }
        else if(args.length==2){
            if(args[1]>=0){
                return args[0]-args[1]; //showing subtraction
            }
        }
        else if(args.length===3){
            return args[0]+args[1]+args[2]; //showing addition
        }
        else if(args.length===4){
            return args[0]*args[1]*args[2]*args[3]; //showing multiplication
        }
    }
}

let object=new Calculator();

console.log(object.calc(2,1));

console.log(object.calc(1,2,3));

console.log(object.calc(1,2,3,4));

