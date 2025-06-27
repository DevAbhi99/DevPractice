// LinkedList is not a linear datastructure like other datastructures like stacks, queues, arrays, strings or hashmaps

//Singly

class Node{

    constructor(data){
     this.data=data;
     this.next=null;
    }
}


class Single{

    constructor(){
        this.head=null;
    }


    append(data){

        let newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
        }

        let curr=this.head;

        while(curr.next){
            curr=curr.next;
            curr.next=newNode;
        }
    }
    

    prepend(data){
        let newNode=new Node(data);

        newNode.next=this.head;
        this.head=newNode;
    }


    delete(data){
        if(!this.head){
            return;
        }


       if(this.head.data===data){
        this.head=this.head.next;
       }


       while(curr.next&&curr.next.data!==data){
        curr=curr.next;
       }

       if(curr.next){
        curr.next=curr.next.next;
       }

    }

}