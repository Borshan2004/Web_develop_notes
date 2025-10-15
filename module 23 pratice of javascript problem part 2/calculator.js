function add(a,b){
    const add_number = a+b;
    return add_number; 
}

function substract(a,b){
    const substract_number=a-b;
    return substract_number;
}

function multily(a,b){
    const multily_number=a*b;
    return multily_number;
}

function divide(a,b){
    const divide_number=a/b;
    return divide_number;
}


function calculator(a,b,operation){
    if(operation==='add'){
        const ans =add(a,b);
        return ans;
    }
    else if(operation==='substract'){
        const ans =substract(a,b);
        return ans;
    }
    else if(operation==='multily'){
        const ans =multily(a,b);
        return ans;
    }
    else{
        const ans =divide(a,b);
        return ans;
    }

}

const answer = calculator(30,6,'divide');
console.log(answer);