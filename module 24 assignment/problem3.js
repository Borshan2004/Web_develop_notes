function electionResult(array){

    let cnt_mango=0;
    let cnt_banna=0;

    for(let i=0;i<array.length;i++){
        if(array[i]==="mango"){
            cnt_mango++;
        }
        else if(array[i]=="banana"){
            cnt_banna++;
        }
    }

    if(!Array.isArray(array)){
        return 'invalid';
    }
    else if(cnt_mango>cnt_banna){
        return "Mango";
    }
    else if(cnt_mango<cnt_banna){
        return "Banana";
    }
    else{
        return "Draw";
    }


}

const array=["mango", "BananA", "na vote", "na vote"];
const res = electionResult(array);
console.log(res);