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

 const palindrome =(word)=>{
     var s=new Stack()
     var reverse =''
     for(let i=0;i<word.length;i++){
         s.push(word[i])
         console.log(s.peek())
     }
     while(s.length()>0){
         reverse+=s.pop()
     }
     console.log(reverse)
     return word==reverse
 }

 var wrd='poop'
 if(palindrome(wrd)){
     console.log("palindrome")
 }else{
     console.log('not palindrome')
 }
