function List<T>(arg : T) : T
{
    console.log(arg);
    return arg;
}

List<string>("abc");
List<number>(100);

class Collection<T>
{
    private _List : T[];
    
    constructor()
    {
        this._List = [];
    }

    AddItem(item : T)
    {
        this._List.push(item);
    }

    AddItems(items : T[])
    {
        items.forEach(
            function(item)
            {
                
                this._List.push(item);
                
            }.bind(this)
        )    
    }

    GetItems()
    {
        return this._List;
    }
}

var products  = new Collection<string>();

products.AddItem( "Mobiles" );
//products.AddItem( 10 );

products.AddItems( [ "Tablet","Laptop " ] );

console.table( products.GetItems() );







