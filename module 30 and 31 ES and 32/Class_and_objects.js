//in the class we can create the atribute ->means like variable 
//in class also can create the function without using the function keyword

class Products{

    constructor(name,price,amount,warenty){
        this.name=name;
        this.amount=amount;
        this.price=price;
        this.warenty=warenty;
    }

    product_details(){
        console.log(`
                     Name of the product     : ${this.name}
                     Price of the product    : ${this.price}
                     Amount of the product   : ${this.amount}
                     Service time of product : ${this.warenty}`);
    }

}

const p1 = new Products("Apple",1200,20,2);
const p2 = new Products("Sumsung",200,5,1);
p1.product_details();
p2.product_details();