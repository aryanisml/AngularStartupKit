import { Component, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import {ActivatedRoute} from '@angular/router'

import StockModel from "../Model/StockModel";
import { IStock } from "../../interfaces/IStock";
import NotifcationService from '../../services/NotificationService';
import {DataService} from '../../services/DataService';


@Component({
  selector: 'web-inventory-list',
  templateUrl: './InventoryListTemplate.html'

})
class InventoryListComponent {

  private editingText: string;
  private saveText: string;
  private isEditing: boolean;
  NotifiationMessage:string

  @Output() onDeleteAction: EventEmitter<IStock>;
  @Output() onUpdateAction: EventEmitter<IStock>;
  @Input() StocksList: StockModel[];


  constructor(private _NotificationService : NotifcationService, private _DataService:DataService, private _ActivatedRoute:ActivatedRoute) {
    this.StocksList = [];
    this.onDeleteAction = new EventEmitter<IStock>();
    this.onUpdateAction = new EventEmitter<IStock>();
    this.editingText = 'Edit';
    this.saveText = 'Save';

  }

ngOnInit() {

  this._ActivatedRoute.params.subscribe((routerParameter)=>{
    console.dir(routerParameter);
    });
     

this._ActivatedRoute.queryParams.subscribe((queryParameters)=>{
console.dir(queryParameters);
});






  this._DataService.GetStocks()
  .then(
   (stocks:StockModel[])=>{
      this.StocksList= stocks;
     },
   (error)=>{
     console.log(error);
   },

  );

  /*
  this._NotificationService.Register().subscribe(
    (message:string)=>{
      this.NotifiationMessage=message;
    }

  ) */

}


  onEdit(stock: any, stocklist: any, index :number) {
    stocklist.forEach(function(el : any ,indexVal: number){
      if (indexVal==index) {
        el.isEditing = true;    
      }else{
        el.isEditing=false;
      }
    })
      this.StocksList=stocklist;
  }

  onDelete(stock: IStock) {
    this.onDeleteAction.emit(stock);
  }

  onUpdate(stock: any) {
    this.onUpdateAction.emit(stock);
   // stock.isEditing = false;

  }

  onUpdateSecond(stockName: string, quantity: number) {
    quantity = Number(quantity);
    let obj = new StockModel();
    obj.Name = stockName;
    obj.Qty = quantity;
    obj.isEditing = true;
    this.onUpdateAction.emit(obj);
   
  }




}

export default InventoryListComponent;