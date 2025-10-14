const mobile = [
    {mobile_name:'walton',price:2500,color:'red'},
    {mobile_name:'redmi',price:8500,color:'red'},
    {mobile_name:'iphone',price:125000,color:'red'},
    {mobile_name:'nokia',price:22500,color:'red'},
]

function expensive_phone(mobile){

    let max_phone = mobile[0];
    for(const phones of mobile){
        if(phones.price>max_phone.price){
            max_phone=phones;
        }
    }
    return max_phone



}


const ans = expensive_phone(mobile);
console.log(ans);
