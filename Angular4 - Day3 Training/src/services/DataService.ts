
import { Injectable } from "@angular/core";
import  StockModel from '../components/Model/StockModel'
import { IStock } from "../interfaces/IStock";

@Injectable()
export class DataService{
private StockModel : StockModel[];
    constructor(){
        this.StockModel=[
            new StockModel("Mobile",100),
            new StockModel("Laptop",300),
            new StockModel("Iopd",400)
        ];
    }
    
    GetStocks(){
        return this.StockModel;
    }

    AddStocks(newStock : StockModel){
        var matchedRecord=this.StockModel.find((item:IStock)=>{
          return item.Name==newStock.Name;
        });
       if (!matchedRecord) {
            this.StockModel.push(newStock); 
            return true;
       }else{
            return false;
       }
    }

    DeleteStock(stock:StockModel){
        let stocklist=this.GetStocks();    
        const objIndex =stocklist.indexOf(stock);
        if(objIndex > -1) {
            stocklist.splice(objIndex,1)
        }
        return stocklist;
        
    }
    UpdateStock(stock:StockModel){
        return this.StockModel;
    }

    UpdateStockSecond(stock:IStock){
        let stocklist=this.GetStocks();
        var matchedRecord=this.StockModel.find((item:IStock)=>{
            if (!item.isEditing) {
                return item.Name==stock.Name;    
            }
          });
          if (!matchedRecord) {
            stocklist=stocklist.map(
                function predicate(obj)
                {
                      if ( obj.isEditing ==true) {
                           obj.Name=stock.Name;
                           obj.Qty=stock.Qty;
                           obj.isEditing=false;
                      }
                      return obj;
                }
            )
            this.StockModel= stocklist;
            return true;
          }else{
            return false;
          } 
    }
}