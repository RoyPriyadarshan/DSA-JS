class Stack {
   constructor() {
        this.dataStore = []
        this.top = 0
        this.push = this.push
        this.pop = this.pop
        this.peek = this.peek
    }

    push=(element)=>{
        return this.dataStore[this.top++]=element
    }
    pop=()=>{
        return this.dataStore[--this.top]
    }
    peek=()=>{
        return this.dataStore[this.top-1]
    }
    length=()=>{
        return this.top
    }
    clear=()=>{
        this.top=0
    }
}
var s = new Stack()
s.push('David')
s.push('Sam')
s.push('Pari')
s.push('Ron')
s.push('Harry')
s.push('Jean')
s.push('Luna')
console.log(s.peek())
console.log(s.pop())
console.log(s.peek())
console.log(s.length())
console.log(s.peek())
console.log("clear")
s.clear()
console.log("now the peak "+s.peek()+" the top "+s.top)

