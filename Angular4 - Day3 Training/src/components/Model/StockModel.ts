class StockModel{

    public Name :string;
    public Qty:number;
    public isEditing:boolean
    constructor(name:string="", qty:number=0, _isEditing=false){
        this.Name=name;
        this.Qty=qty;
        this.isEditing=_isEditing
    }


}
export default StockModel