/*function multiply(num1,num2){

    if(typeof num1!=='number'||typeof num2!=='number'){
        return 'please enter a number';
    }

    const mul = num1*num2;
    return mul;

}

const res= multiply('5',20);
console.log(res);


function fullname(firstname,lastname){
    if(typeof firstname!=='string'){
        return 'there is no string in the first name';
    }
    else if(typeof lastname!=='string'){
        return 'there is no string in the last name';
    }
    const fn = firstname+" "+lastname;
    return fn;
}

const res = fullname(5,"purification");
console.log(res);
*/

function check_array(numbers){

    if(Array.isArray(numbers)==false){
        return 'there is no array please input the array';
    }
    const s = numbers[2];
    return s;
}

//const res = check_array([10,20,36,20,40]);
const res = check_array(50);
console.log(res);

