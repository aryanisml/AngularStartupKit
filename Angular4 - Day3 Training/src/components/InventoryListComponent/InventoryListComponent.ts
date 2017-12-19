import { Component, ViewEncapsulation, Input, Output, EventEmitter } from "@angular/core";
import StockModel from "../Model/StockModel";
import { IStock } from "../../interfaces/IStock";

@Component({
  selector: 'web-inventory-list',
  templateUrl: './InventoryListTemplate.html'

})
class InventoryListComponent {

  private editingText: string;
  private saveText: string;
  private isEditing: boolean;

  @Output() onDeleteAction: EventEmitter<IStock>;
  @Output() onUpdateAction: EventEmitter<IStock>;
  @Input() StocksList: StockModel[];

  constructor() {
    this.StocksList = [];
    this.onDeleteAction = new EventEmitter<IStock>();
    this.onUpdateAction = new EventEmitter<IStock>();
    this.editingText = 'Edit';
    this.saveText = 'Save';

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
    stock.isEditing = false;

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