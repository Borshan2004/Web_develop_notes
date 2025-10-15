
function discount_cal(quantity){

    let total;

    if(quantity<=100){
        total = quantity*100;
    }
    else if(quantity<=200){
        total= quantity*90;
    }
    else{
        total = quantity*70;
    }
    return total;

}

const discount_cal_total = discount_cal(200);
console.log(discount_cal_total);

