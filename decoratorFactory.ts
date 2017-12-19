

// Decorator Factory
var Stringable = function(params : any)
{
    return (target : any) => 
   {
    
        target.prototype.toString = function()
        {
            var props = Object.keys(this);
            
            var resultProps : any[] = [];

            props.forEach(
                (prop) => 
                {
                    resultProps.push(prop + " : " + this[prop]);
                }
            )
        
            return resultProps.join(params.seperator);

        }
   }

   
}

@Stringable(
    {
        seperator : " - "
    }
)

class Customer
{
    private Name : string;
    private Age : number;

    constructor(name : string , age:number)
    {
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