const car = {
    model : 'BMW',
    color :'Black',
    number : 2234,
    ready : false ,
    'latest model' : ['borshan','hasan','kamal'],
}

//here in the loop we use the 'in'
// for(const properti in car){
//     console.log(properti);
//     console.log(car[properti]);
// }

//here in the loop we use the 'of'
const keys = Object.keys(car);
for(const properti of keys){
    console.log(properti,car[properti]);

}