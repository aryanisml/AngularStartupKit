// Decorator
var Stringable = function (target: any) {
    //console.dir(target);

    target.prototype.toString = function () {
        var props = Object.keys(this);

        var resultProps: any[] = [];

        props.forEach(
            (prop) => {
                resultProps.push(prop + " : " + this[prop]);
            }
        )

        return resultProps.join(' | ');
    }
}


@Stringable

class Customer {
    private Name: string;
    private Age: number;

    constructor(name: string, age: number) {
        this.Name = name;
        this.Age = age
    }

}

// var Logger = function(target : any)
// {
//     target.length;
//     target.arguments
// }

// @Logger
// function F1(arg1:any,arg2:any)
// {
// }


export default Customer;