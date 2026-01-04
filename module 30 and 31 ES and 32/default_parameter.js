//num1=0 and num2=0 this will zero when there is no value pass for them and that time they work as a zero
// but there is not always zero 
// there can be any value and it will depend on the use 
//for sum the num1=0 and num2=0
//but if we do the multification num1=1 and also the num2=1
function sum(num1=0,num2=0){

    const sum= num1+num2;
    console.log(sum);

}


function multification(num1=1,num2=1){
    const mal = num1*num2;
    console.log(mal);
}

sum(10,40);
multification(10,40);