class Queue{
    constructor(){
        this.dataStore=[]
        this.enqueue=this.enqueue
        this.dqueue=this.dqueue
        this.front=this.front
        this.back=this.back
        this.isEmpty=this.isEmpty
    }
    enqueue=(ele)=>{
        return this.dataStore.push(ele)
    }
    dqueue=()=>{
        return this.dataStore.shift()
    }
    front=()=>{
        return this.dataStore[0]
    }
    back=()=>{
        return this.dataStore[this.dataStore.length-1]
    }
    isEmpty=()=>{
        return this.dataStore.length==0
    }
}

var q=new Queue()
q.enqueue('Rashi')
console.log(q.dataStore)
q.enqueue('Max')
console.log(q.dataStore)
q.enqueue('Luna')
console.log(q.dataStore)
q.enqueue('Harry')
console.log(q.dataStore)
q.enqueue('Ron')
console.log(q.dataStore)
q.enqueue('Tracy')
console.log(q.dataStore)
console.log('Front = '+q.front())
console.log('Back = '+q.back())
q.dqueue()
console.log(q.dataStore)
q.dqueue()
console.log(q.dataStore)
q.dqueue()
console.log(q.dataStore)
q.dqueue()
console.log(q.dataStore)
q.dqueue()
console.log(q.dataStore)
q.dqueue()
console.log(q.dataStore)
console.log(q.isEmpty())