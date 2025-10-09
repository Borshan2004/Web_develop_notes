const car = {
    model : 'BMW',
    color :'Black',
    number : 2234,
    ready : false ,
    'latest model' : ['borshan','hasan','kamal'],
}

console.log(car);

car.color= 'red';
car['number'] = 2004;

console.log(car);

const KeyName = 'number';
car[KeyName] = 50000;
console.log(car);
