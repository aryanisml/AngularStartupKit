
class Customer
{
    constructor()
    {
        if(Customer.Instance == undefined || Customer.Instance == null)
        {
            Customer.Instance = this;
            Customer.Init();
        }
       
        
        console.log("Instance Constructor Called");
        
    }
    
    static Init()
    {
        console.log("Static Constructor Called");
    }
    
    //static InstanceCount : number = 0
    static Instance : Customer
}

//Customer.Init();    

var c1 = new Customer();
var c2 = new Customer();