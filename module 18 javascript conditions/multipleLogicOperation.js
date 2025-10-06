//when you use the const you can not change the   variable it is 

const BcsCader =true;
const Salary = 20000;
const height = 76;

// if(BcsCader==true||Salary>25000||height>79){
//     console.log("Not a bad choice");
// }
// else{
//     console.log("its a very bad choice");
// }



// if(BcsCader==true&&Salary>25000&&height>79){
//     console.log("perfect  choice");
// }
// else{
//     console.log("its a very bad choice");
// }

// if((Salary>18000&&height>70)||BcsCader==true){
//     console.log("good for this");
// }
// else{
//     console.log("It is a very much bad choice");
// }

const price=4000;
if(price>=5000){
    const discount= price*10/100;
    const pay = price -discount;
    console.log(pay);
}
else if(price>=4000){
    const discount= price*5/100;
    const pay = price -discount;
    console.log(pay);
}
else{
    console.log(price);
}

