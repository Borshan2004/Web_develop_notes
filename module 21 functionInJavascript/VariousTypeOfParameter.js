// function check_string_even_or_odd(str){

//    let check_string = str.length;
  
//    if(check_string%2===0){
//     console.log("this is even number string");
//    }
//    else{
//     console.log("\nit is not even number string and it is odd numver string");
//    }


// }

// const value = check_string_even_or_odd("borshan");


//write a function to give me the sum of all numbers in an array

// function sum_of_the_array(array){
        
//     let sum = 0;

//     for(let i=0;i<array.length;i++){
//          sum = sum + array[i];
//     }

//     return sum;
// }


// array =[10,20,30,40,50,60];

// const result = sum_of_the_array(array);
// console.log(result);




// function that return the fuction the even number 

function only_the_even_number(arr1){
    let new_arr=[];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2===0){
            new_arr.push(arr1[i]);
        }
    }
    return new_arr;
}

const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const s_anwer = only_the_even_number(arr1);
console.log(s_anwer);




// return the sum of the even number




function even_number_sum(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            sum+=arr[i];
        }
    }
    return sum;
}


const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const res = even_number_sum(arr);
console.log(res);
