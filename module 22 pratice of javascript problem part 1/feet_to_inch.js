//12 inch = 1 feet

// function feet_to_inch(value){

//     let change = value *12; 

//     return change;
// }


// const ans = feet_to_inch(5);
// console.log(ans);


function inch_to_feet(value){

    let change_feet_1 = value/12;
    let change_feet_2 = parseInt(change_feet_1); 
    let change_inch = value%12;
    let answer = change_feet_2 + ' feet ' + change_inch  + ' inch';
    return answer;

    

}


let res = inch_to_feet(75);

console.log(res);