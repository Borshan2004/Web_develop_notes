//when we use the setinterval it runs like a infinite loop after a specific time after and after

console.log(1);
console.log(2);



let cnt=0;
const colcok= setInterval(()=>{
    cnt++;
    if(cnt>5){
         //for off  this setinterv
        clearInterval(colcok); 
    }
    console.log("i add new herer");

   al
    
},2000)

console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
