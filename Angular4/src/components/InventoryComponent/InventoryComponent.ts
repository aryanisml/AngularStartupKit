import { Component, ViewEncapsulation, EventEmitter,OnInit } from "@angular/core";
import StockModel from "../Model/StockModel";
import { IStock } from "../../interfaces/IStock";
import { DataService } from "../../services/DataService";


@Component({
  selector: 'web-inventory',
  templateUrl: './InventoryTemplate.html'
})
class InventoryComponent {

  private Stocks: StockModel[];
  private validateSuccess: EventEmitter<IStock>;

  constructor(private _DataService: DataService) {
    this.Stocks=[];
    this.validateSuccess = new EventEmitter<IStock>();
  }

  ngOnInit() {
    var promise = this._DataService.GetStocks();
    promise.then(
      (stocks: StockModel[]) => {  //on success
        this.Stocks=stocks;
        
      },
      (errormessage:string) => { //on error
        console.log(errormessage);
      } 
    )
  }
/*
  AddStock(newStock: StockModel) {
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

    // var updateStocks = this._DataService.AddStocks(newStock);
    // if (updateStocks) {
    //   this.validateSuccess.emit(newStock);
    //   // this.Stocks= this._DataService.GetStocks();
    // } else {
    //   window.alert('Record already exist');
    // }
    newStock.isEditing=false;
    this._DataService.AddStocks(newStock)
    .then(
      ()=>{

      }, //on success
      ()=>{

      } //on  error

    )

    // AddStock(newStock: StockModel) {
      
    //           this._DataService.AddStock(newStock)
    //               .then(
    //               (stock: StockModel[]) => {
    //                   this.stocks = stock;
    //                   this.ValidateSuccess.emit(newStock);
    //               },
    //               (errorMessage) => {
    //                   alert(errorMessage);
    //               }
    //               )
    //       }
    


      
  }*/

  AddStock(newStock: StockModel) {

            this._DataService.AddStocks(newStock)
                .then(
                (stock: StockModel[]) => {
                    this.Stocks = stock;
                    this.validateSuccess.emit(newStock);
                },
                (errorMessage) => {
                    alert(errorMessage);
                }
                )
        }

  DeleteStock(stock: StockModel): void {
    this._DataService.DeleteStock(stock)
    .then(
      (response: StockModel[])=>{ 
        this.Stocks = response;
    },(errorMessage)=>{ alert(errorMessage);});

    // this.Stocks=updateStockList;
  }
  /*
    UpdateStock(stock:StockModel):void{
      var updateStockList=this._DataService.UpdateStock(stock);
      this.Stocks=updateStockList;
    }
  */

  UpdateStock(stock: StockModel): void {
    // var updateStockList = this._DataService.UpdateStockSecond(stock);
    // if (updateStockList) {
    //   this.validateSuccess.emit(stock);
    //   this._DataService.GetStocks();
    // } else {
    //   window.alert('Duplicate stock name');
    // }

  }





}

export default InventoryComponent;