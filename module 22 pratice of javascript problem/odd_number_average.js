/*

function takes an array as parameter 
give me the average  of the odd numbers in the array

*/

function array_average(arr){

    let sum =0,count=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]%2!=0){
            sum+=arr[i];
            count++;
        }

    }

    let average = sum/count;

    return average;
}


let arr =[42,13,58,65,81,96,7,105];

let ans = array_average(arr);

console.log(ans);



