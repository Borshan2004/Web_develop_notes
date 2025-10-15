function layeared_discount(quantity){


    let total;



    if(quantity<=100){

        total = quantity*100;

    }

    else if(quantity<=200){

        const first_100_total = 100*100;
        const remaining_quainty = quantity -100;
        const remaining_total = remaining_quainty*90;
        total= first_100_total+remaining_total;

    }
    else{
         const first_100_total =  100*100;
         const second_100_total =  100*90;
         const remaining_quainty = quantity -200;
         const remaining_total = remaining_quainty*70;
         total= first_100_total+second_100_total+remaining_total;
    }
    return total;

}

const res=layeared_discount(220);
console.log(res);