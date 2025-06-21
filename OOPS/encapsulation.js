// Encapsulation is known as data hiding. When we dont want any other programmer to access and change the data in a code we encapsulate it.

//Lets take example of a company where I want to hide the data for bonus. As different employee will have different salary



class Company{

    #bonus;

    setBonus(bonus){
        this.#bonus=bonus;
    }

    totSal(){
        return this.#bonus;
    }



}


let bonus=30000;

let obj=new Company();

obj.setBonus(bonus);

console.log(obj.totSal());