class Node{
    constructor(element){
    this.element = element;
    this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        let node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        }else{
            this.head = current;
        }
        this.size++;
    }
}

let node = new Node(1);
console.log(node);

let ll = new linkedList();

ll.add(2);
ll.add(3);
ll.add(4);
console.log(ll);











