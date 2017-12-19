import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  DoCheck,
  Input,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  ElementRef
} from "@angular/core";
import StockModel from '../Model/StockModel';

@Component({
  selector: 'web-child',
  templateUrl: './ChildTemplate.html'
})
class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit {

  @Input() counter: number;
  @Input() StockDetails: StockModel;

  private _StockDetails: StockModel;
  private _NativeElement:any;

  constructor(private _elementRef: ElementRef) {


    this.counter = 0;
    this.StockDetails = new StockModel();
    this._StockDetails = new StockModel();
    this._NativeElement = this._elementRef.nativeElement; //DOM Object

    console.log('Child Component: Constructor');
  }

  ngOnInit() {
    console.log('Child Component: ngOnInit');
    console.groupEnd();
  }


  ngOnDestroy() {
    console.log('Child Component: ngOnDestroy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  console.dir(changes);

    if ((changes['StockDetails']
    ) && (
        changes['StockDetails']["previousValue"] &&
        changes['StockDetails']["currentValue"] ||
        changes['StockDetails'].firstChange)
    ) {
      let changeObj = changes['StockDetails'];
      if (changes['StockDetails'].firstChange) {
        this._StockDetails = this.StockDetails.copy();
      }
      else if (changeObj.currentValue.Qty != changeObj.previousValue.Qty) {
        this._StockDetails = this.StockDetails.copy();
      }
    }

    console.log(this.counter);

  }

  ngDoCheck(): void {

    if (this._StockDetails.Qty != this.StockDetails.Qty) {
      this._StockDetails = this.StockDetails.copy();
    }
  }

  ngAfterContentInit(): void {

    this.UpdateContent();
    console.log("Child Component: ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    
    //Third party plugins instantiate // any dom listner for the component
    console.log("Child Component: ngAfterViewInit");
  }

  
  ngAfterContentChecked() {
    this.UpdateContent();
    console.log("Child Component: ngAfterContentChecked");
  }
  ngAfterViewChecked() {
        console.log("Child Component: ngAfterViewChecked");
  }
  

UpdateContent(){
  var nameElement=this._NativeElement.querySelector("[name='Name']");
  nameElement.innerHTML=this._StockDetails.Name;

  var QtyElement=this._NativeElement.querySelector("[name='Qty']");
  QtyElement.innerHTML=this._StockDetails.Qty;

  QtyElement.style.displau="inline-block";


  var qty=this._StockDetails.Qty;


  if (qty>30) {
    QtyElement.style.background="yellow";
  }else{
    QtyElement.style.background="orange";
  }


}



}

export default ChildComponent;