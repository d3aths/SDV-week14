
//how to contruct a double linked list

class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    //for pushing values into the list
    push(val){
        var newNode = new Node(val)
        if(this.length === 0){ //creates a new head and tail if no length detected
            this.head = newNode
            this.tail = newNode
        }
        else { //creates the next node on tail if length is detected
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } //increments length for each node created
        this.length++
        return this
    }
    //removing a value off the list
    pop(val){
        if(!this.head) return undefined
        var poppedNode = this.tail //removes the tail and returns the values to null if it was only 1 long
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        else { //changes the previous node to the new tail
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length-- //decrements length and gives you the node you popped out
        return poppedNode
    }
    //get index of value on list
    get(index){
        if(index < 0 || index >= this.length) return null
        var count, current
        if(index <= this.length/2){ //if index is less or equal than half the length of list, start from the head and search towards middle
            count = 0
            current = this.head
            while(count !== index){ //while count isnt the same as index, keep going from curernt to next, and add to count
                current = curent.next
                count++
            }
        }
        else { //otherwise is index is great than half the length, start from tail and search towards middle
            count = this.length - 1
            current = this.tail
            while(count !== index){
                current = current.prev
                count--
            }
        }
        return current
    }
    //change the value of a node based on its index
    set(index, val){
        var foundNode = this.get(index) //using the get method, find the index of node
        if(foundNode != null){
            foundNode.value = val //then change its value and return true
            return true
        }
        return false
    }
}
