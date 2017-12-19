class Prodcut {
    Name: string;
    Quantity: number;

    constructor(name: string = "", qty: number = 0) {
        this.Name = name;
        this.Quantity = qty;
    }

    GetProductDetails():string{
        return `${this.Quantity} items of ${this.Name} is available`;
    }


}

export  default Prodcut;