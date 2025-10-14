let a=5;
let b=8;

const temp = a;
a=b;
b=temp;

console.log(a);
console.log(b);



//another way of swap 

let x=10;
let y= 20;

[x,y] = [y,x];
console.log(x,y);
