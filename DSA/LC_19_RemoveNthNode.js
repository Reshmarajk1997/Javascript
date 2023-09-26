let head = [1,2,3,4,5]
function remove(head,n){
    // let val = head[0]
    let current = {
        data : head[0],
        next :head[1]
    }
    // console.log(current);
    let newNode = current.next;
    newNode.next = head[2]
    console.log(newNode.next);
    let i=1;
    while(newNode){
        // console.log(current);
        i++;
       newNode.next = head[i];
       console.log(head[i]);
       newNode = newNode.next;
       console.log(newNode);
    }
}

remove(head,2)