function cashOut(money){

    if(typeof money!=='number'|| money<0){
        return 'invaild';
    }

    const charge = money*0.0175;
    return charge;

}

const final_output=cashOut(-850);
console.log(final_output);