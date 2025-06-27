// Implementing Single Linkedlist

class Node{

    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class Singly{

    constructor(){
        this.head=null;
    }


    append(data){
        
        const newNode=new Node(data);

        if(!this.head){
            this.head=newNode;
            return;
        }

        let curr=this.head;

        while(curr.next){
            curr=curr.next;
        }

        curr.next=newNode;
    }


    prepend(data){

    const newNode=new Node(data);

    newNode.next=this.head;
    this.head=newNode;
    }


    delete(data){

        if(!this.head){
            return;
        }

        if(this.head.data===data){
            this.head=this.head.next;
            return;
        }


        let curr=this.head;

        while(curr.next&&curr.next.data!==data){
            curr=curr.next;
        }

        if(curr.next){
            curr.next=curr.next.next;
        }
    
    }


    print(){
        let curr=this.head;

        let result='';

        while(curr.next){
            result+=curr.data+'=>';
            curr=curr.next;
        }

        console.log(result);
    }
}


const ll=new Singly();


ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);

ll.print();

ll.prepend(9);

ll.print();

ll.delete(4);

ll.print();