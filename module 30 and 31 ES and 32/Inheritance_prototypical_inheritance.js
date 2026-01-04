//inheretance 
//one class or shatay another class ar chain is called the prototypical inheritance

class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }

    class_of_vehicle(){

        console.log("Every bus is present here");
    }
}

class Bus extends Vehicle{
    //# is used for private -> work of encapsolution
    #seat;
    constructor(name,price,seat){
        super(name,price);
        this.#seat=seat;

    }

    class_of_bus(){
        console.log("All kind of Bus is avaible here");
    }

    class_bus_private(){
        console.log(this.#seat);
    }

}


class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }

    class_of_truck(){
        console.log("here is all truck list please check it form here ");
    }
}

const b1 = new Bus("Tvs",1200,10);
console.log(b1.name);
b1.class_bus_private();