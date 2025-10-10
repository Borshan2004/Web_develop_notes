const number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(number);

// const reverse_number = number.reverse();
// console.log(reverse_number);


//push take the value at the end of the array 
//unshift take the value at the start 



// const reverse_number = [];

// for (const num of number) {
//     reverse_number.unshift(num);
// }

// console.log(reverse_number);

const store_num=[];

for(let i=number.length-1;i>=0;i--){

    const num= number[i];
    console.log(num);
    
    store_num.push(number[i]);
}
console.log(store_num);
