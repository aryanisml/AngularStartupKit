import { Component, ViewEncapsulation,Output, EventEmitter, Input, OnInit } from "@angular/core";
import  StockModel  from "../Model/StockModel";
import  {IStock}  from "../../interfaces/IStock";


@Component({
  selector: 'web-inventory-entry',
  templateUrl: './InventoryEntryTemplate.html'

})
class InventoryEntryComponent {

@Output() onSave : EventEmitter<IStock> =new EventEmitter<IStock>();
@Input() onAddSucess : EventEmitter<IStock>;

  private NewStock: StockModel;

  constructor(){
    this.NewStock=new StockModel();
    //this.onAddSucess==new EventEmitter<IStock>();
  }

ngOnInit() {
  
  if (this.onAddSucess) {
       this.onAddSucess.subscribe(()=>{
          this.NewStock.Name="";
          this.NewStock.Qty=0;
          this.NewStock=new StockModel();

       })
  }

}




  Save(){
     var obj ={
      ...this.NewStock
     
     }
      this.onSave.emit(obj);
      // this.NewStock.Name="";
      // this.NewStock.Qty=0;
      // this.NewStock=new StockModel();
  }


}

export default InventoryEntryComponent;