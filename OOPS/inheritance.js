//Inheritance is a concept in object oriented programming where child class can access properties and methods of parent class



class Parent{

    wealth=1000000;

    prop(){
        return 'This is ancestral property'
    }


}


//Creating a child class to access to property of Parent. Now I will show method overriding where child class can change the properties and methods of parent class

class Child extends Parent{  //Once the child class inherits the properties of the parent class the child class can access the properties of the parent class and can modify them automatically a concept which is called method overriding

wealth=50000000; //wealth property modified showing overriding


//now gonna show method overriding below. How the method of the parent class gets changed

prop(){
    return super.prop()+' Now this is my property';  //super keyword can be used by child class to call the constructor and method of the parent class
}

}

let obj=new Child();

console.log(obj.wealth);

console.log(obj.prop());