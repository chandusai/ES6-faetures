// let and var key words

function sayHell(){
 for(let i=0;i<10;i++){
  console.log(i);
 }
console.log(i);
}
sayHell()



// By using the let keyword "i" can be accessible inside the "for code " block. 

// But where as when we are using the var key word " i" can be accessible entire function.
// When we are declaring the variables with "var" keyword are scoped to the function.
// Varibles which are declared with let keyword are scoped with block in which they are defined.

function sayHello(){
    for(var i=0;i<6;i++){
     console.log(i);
    }
   console.log(i);
   }
   sayHello()