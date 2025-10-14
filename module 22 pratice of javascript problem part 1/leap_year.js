function leap_year_check(year){
    if(year%100!==0&&year%4===0){
        return true;
    }
    else if(year%100===0&&year%400===0){
        return true;
    }
    else{
        return false;
    }
}

let ans1 = leap_year_check(2100);
let ans2 = leap_year_check(2400);

console.log(ans1);
console.log(ans2);