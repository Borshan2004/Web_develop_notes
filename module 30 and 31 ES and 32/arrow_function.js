
//regural function
function sum(num1,num2){
    return num1+num2;
}

const ans =sum(5,20);
console.log(ans);



const ans2= function(num_1,num_2){
    return num_1+num_2;
}

console.log(ans2(5,2));

//for single line 
const ans3=(num1,num2)=>num1+num2;
console.log(ans3(5,9));


//for multiple line
const ans4=(num1)=>{
    console.log("my name is ",num1);
}

ans4(5);


const test =()=>{
    console.log("hello empty how are you");
}

test();

const square = x=>x*x;
console.log(square(5));

// document.getElementById("ndc").addEventListener("click",function(){
//     console.log("hello");
// })

document.getElementById("ndc").addEventListener("click",()=>{
    console.log("hello");
})