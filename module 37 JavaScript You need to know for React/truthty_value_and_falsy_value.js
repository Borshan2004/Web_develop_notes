//false value
//0 -0 "" false null undefined

//truthly value

// "jdfahkfd" 5456465 {} [] true

isActive= true;

const hid=()=>{
    console.log("true value");
}

const open=()=>{
    console.log("false value");
}

isActive?hid():open();


//for &&-> it only works for true

isActive&& hid();

//for || it only works for false value

isActive||hid();


//convert to num from string

let num ="10";
console.log(+num);

const result = "20"+"";

console.log(result);

