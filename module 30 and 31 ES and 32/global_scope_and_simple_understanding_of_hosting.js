//if we declare the n3 as a global then it will work
let n3;

console.log(scope);

var scope="Borshan";//when we use this it automitically create a variable on the top like a gloabal variable
console.log(scope);

function sum(n1,n2){
    //var n4 ->we have created the var in the if local but as we use var for this reason it will create a global in the start of the function
    
    if(n1>n2){
          n3="good";//as const dont work like a gobal variable of var for this reason this will give a error it will only work in the this local of the bracket
        var n4 ="good";
    }
    console.log(n3);
    console.log(n4);
}

sum(4,2);