class StockModel{

    public Name :string;
    public Qty:number;
    public isEditing:boolean;
    public id:number;
    constructor(name:string="", qty:number=0, _isEditing=false, _id:number=0){
        this.Name=name;
        this.Qty=qty;
        this.isEditing=_isEditing;
        this.id=_id
    }

    copy(){

        return new StockModel(this.Name,this.Qty,this.isEditing,this.id);
    }



}
export default StockModel