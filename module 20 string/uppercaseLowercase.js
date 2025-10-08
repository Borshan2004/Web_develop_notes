/*
const n1= "Borshan Purification";
const n2 = "BORSHAN PURIFICATION";

console.log(n1.toUpperCase());
console.log(n2.toLowerCase());

if(n1.toLowerCase()===n2.toLowerCase()){
    console.log("Your email is correct");
}
else{
    console.log("Your eamil is not vaild");
}

*/


//to remove the space form the front and end whern comparing trim() is used


const drink1 = "water is most value able thing";
const drink2 = "          water is most value able thing ";

if(drink1.trim===drink2.trim){ // when i dont use the trim not ok is print 
    console.log("ok");
}
else{
    console.log("not ok");
}