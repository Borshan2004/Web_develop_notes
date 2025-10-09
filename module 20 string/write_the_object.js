const car = {
    model : 'BMW',
    color :'Black',
    number : 2234,
    ready : false ,
    'latest model' : ['borshan','hasan','kamal'],
}
// what function  inside the object is called the method 

// console.log(car);
// console.log(car.model);

// const person_car_number = car.number;
// console.log(person_car_number);

//or another way

// console.log(car['ready']);
// const person_car_number = car['color'];
// console.log(person_car_number);

// console.log(car['latest model']);

//another way of writing 

const KeyName = 'color';
console.log(car[KeyName]);

