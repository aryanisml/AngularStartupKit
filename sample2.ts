// -------------------------------------------------- //

class Car
{
    // Type Declaration: Properties
    Name : string;
    Qty : number; //Qty : number = 100;
    Type : string = "Vehicle";
    
    // Type Declaration: Functions
    GetDetailsInstance : (arg : number) => void;

    // Constructor: Optional
    constructor( name: string = "", qty : number)
    {
        this.Name = name;
        this.Qty = qty;
        
        // Instance Function (OOPS) -> Function within the Object [Each Object of this type has its own defination of this method]
        this.GetDetailsInstance = function() 
        {    
        }
    }
    
    // Static Function (OOPS) -> Function is Object's Prototype (JS) [Shared Function]
    GetDetails = function(type:string) : string
    {
        console.log( this.Name + " | " + this.Qty);    
        return "";
    }
    
}

var carFord = new Car( "Ford" , 50 );
console.dir(carFord);

var carVW = new Car( "VW" , 100 );
console.dir(carVW);

carVW.GetDetails("");

/*var carVW = new Car();
console.dir(carVW);*/

