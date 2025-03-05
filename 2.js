// The output will come as true as because b variable has the same memory location of a cause a has been assigned to the variable b

let a=[]; // memory location of a----> #a15fgd
let b= a; // we put a in b
console.warn(a==b); // true
console.warn(a===b); // true


let x=[];
let y=[];
let z=y;
console.warn(x==y);  // false