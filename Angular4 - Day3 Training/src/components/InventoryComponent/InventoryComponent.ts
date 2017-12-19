import { Component, ViewEncapsulation, EventEmitter } from "@angular/core";
import StockModel from "../Model/StockModel";
import { IStock } from "../../interfaces/IStock";
import { DataService } from "../../services/DataService";

@Component({
  selector: 'web-inventory',
  templateUrl: './InventoryTemplate.html'
})
class InventoryComponent {

  private Stocks: IStock[];
  private validateSuccess: EventEmitter<IStock>;

  constructor(private _DataService: DataService) {
    this.Stocks= this._DataService.GetStocks();

    this.Stocks=this.Stocks.map(
      function predicate(obj)
      {
          obj.isEditing=false
          return obj  
      }   
  )


    this.validateSuccess = new EventEmitter<IStock>();
  }


  AddStock(newStock: StockModel): void {
    //   console.table(newStock)
    //   var matchedRecord=this.Stocks.find((item:IStock)=>{
    //     return item.Name==newStock.Name;
    //   });

    //  if (!matchedRecord) {
    //       this.Stocks.push(newStock); 
    //       this.validateSuccess.emit(newStock); 
    //  }else{
    //       window.alert('Record already exist');
    //  }

    var updateStocks = this._DataService.AddStocks(newStock);
    if (updateStocks) {
      this.validateSuccess.emit(newStock);
      this.Stocks= this._DataService.GetStocks();
    } else {
      window.alert('Record already exist');
    }
  }

  DeleteStock(stock:StockModel):void{
    var updateStockList=  this._DataService.DeleteStock(stock);
    this.Stocks=updateStockList;
  }
/*
  UpdateStock(stock:StockModel):void{
    var updateStockList=this._DataService.UpdateStock(stock);
    this.Stocks=updateStockList;
  }
*/

UpdateStock(stock:StockModel):void{
    var updateStockList=this._DataService.UpdateStockSecond(stock);
    if (updateStockList) {
      this.validateSuccess.emit(stock);
      this._DataService.GetStocks();
    } else {
      window.alert('Duplicate stock name');
    }

  }





}

export default InventoryComponent;