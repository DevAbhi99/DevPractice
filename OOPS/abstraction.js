/*Abstraction is known as detail hiding where the internal details of the process is hidden. Only essential features are shown
For example: in a car we are only exposed to essential features like steering, gear, brake etc. but we dont really know the gear system works or the break works.
*/

//Below is the implementation of an ATM system implemented through abstraction

class ATM{

     cardno;
    cvv;
    pin;

    constructor(cardno, cvv, pin){
        this.cardno=cardno;
        this.cvv=cvv;
        this.pin=pin;
    }

    //private function to validate the atm card
    #validateCard(cardno, cvv, pin){
        if(cardno.length===10&&cvv.length===3&&pin.length===4){
            return true;
        }
      
        return false;

    }

    //private function to process the atm card for transaction

    #processcard(){
        if(this.#validateCard(this.cardno, this.cvv, this.pin)){
            return 'transaction Processed';
        }
    }

    customerInterface(amount){

        if(this.#validateCard(this.cardno, this.cvv, this.pin)){
            
                return this.#processcard()+'\n\n'+amount+' deducted from you account';     
        }else{
            return 'transaction did not process due to technical error';
        }

    }

}


let amount=3000;

let obj=new ATM('123456789','123','1234');

console.log(obj.customerInterface(amount));