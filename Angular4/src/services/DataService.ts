
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import StockModel from '../components/Model/StockModel'
import { IStock } from "../interfaces/IStock";



@Injectable()
export class DataService {
    private StockModel: StockModel[];
    constructor(private HttpService: Http) {

        this.StockModel = [
            new StockModel("Mobile", 100),
            new StockModel("Laptop", 300),
            new StockModel("Iopd", 400)
        ];
    }


    private _MapStockModel(stockObjects : IStock[])
    {
         return stockObjects.map(
            (item : IStock) => 
            {
                return new StockModel(
                    item.Name,
                    item.Qty,
                    item.isEditing,
                    item.id
                )
            }
        );
    }

    private _CopyStocks(stocks : StockModel[])
    {
        return stocks.map(
            (stock) => 
            {
                return stock.copy();
            }
        )
    }

    private _HandleServerError(reject : (errorMessage:String) => {} , err : Error)
    {
        console.dir(err);
        reject("Error occured while server interaction");
    }




    
    GetStocks() {
//  return this.StockModel;

//   return this.StockModel.map((stock)=>{
//                 return new StockModel(stock.Name,stock.Qty);
//   });
        var promise = new Promise(
            (resolve, reject) => {

                var observable = this.HttpService.get(
                    "http://localhost:90/stocks"
                );
                observable.subscribe(
                    (response) => { //next
                        var data = response.json();
                        //Model
                        this.StockModel = data.map((item: IStock) => {
                            return new StockModel(
                                item.Name,
                                item.Qty,
                                item.isEditing,
                                item.id
                            )

                        });
                     
                        //View Model
                       resolve(
                        this._CopyStocks(this.StockModel)
                       );
                    },
                    this._HandleServerError.bind(this,reject),
                    () => //Completed
                    {

                    }

                );

            }
        )
        return promise;

    }

    AddStocks(newStock: StockModel) {
        
        return new Promise(
            (resolve,reject)=>{
                var matchedRecord=this.StockModel.find(
                    (item:StockModel)=>{
                        return item.Name==newStock.Name;
                   }
                )
                if(matchedRecord){
                    reject("Record already exists");
                }else{
                    
                  var requestHeaders=new Headers();
                  requestHeaders.append("content-type","application/json");

                  this.HttpService.post(
                    "http://localhost:90/stocks",
                    JSON.stringify(newStock),
                    {
                        headers:requestHeaders
                    }
                  ).subscribe(
                    (response)=>{ 
                        var addedstocks= response.json();
                        newStock.id=addedstocks.id;
                        this.StockModel.push(newStock);
                        resolve(this._CopyStocks(this.StockModel));
                    },
                    this._HandleServerError.bind(this,reject)
                  );
                }
            }
        );
    }

    DeleteStock(newStock: StockModel) {
        return new Promise(
            (resolve,reject)=>
            {
                this.HttpService.delete(
                    `http://localhost:90/Stocks/${newStock.id}`
                ).subscribe(
                    (response)=>
                    {
                      var matchedindex =  this.StockModel.findIndex(
                          (stock)=>
                          {
                                return stock.id == newStock.id
                          }
                        )
                        this.StockModel.splice(matchedindex,1);
                        resolve (this._CopyStocks(this.StockModel))
                    },
                   this._HandleServerError.bind(this,reject)
                )
            }
        )

    }
    UpdateStock(stock: StockModel) {
        return this.StockModel;
    }

    UpdateStockSecond(stock: IStock) {
        let stocklist = this.GetStocks();
        var matchedRecord = this.StockModel.find((item: IStock) => {
            if (!item.isEditing) {
                return item.Name == stock.Name;
            }
        });
        return true;
        //   if (!matchedRecord) {
        //     stocklist=stocklist.map(
        //         function predicate(obj)
        //         {
        //               if ( obj.isEditing ==true) {
        //                    obj.Name=stock.Name;
        //                    obj.Qty=stock.Qty;
        //                    obj.isEditing=false;
        //               }
        //               return obj;
        //         }
        //     )
        //     this.StockModel= stocklist;
        //     return true;
        //   }else{
        //     return false;
        //   } 
    }
}