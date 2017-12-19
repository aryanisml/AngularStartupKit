import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit
} from "@angular/core";
import StockModel from '../Model/StockModel';
import {Router}  from '@angular/router'



@Component({
  selector: 'web-parent',
  templateUrl: './ParentTemplate.html'
})
class ParentComponent implements OnInit, OnChanges, AfterContentInit,AfterViewInit {
  
private Counter:number;
private IsVisible:boolean;
private StockModel : StockModel;

  constructor(private _Router:Router) {

    this.Counter=10;
    this.IsVisible=true;
    
   this.StockModel=new StockModel("Laptop",150);
   
    console.group("Construction Phase");
    console.log('Parent Component: Constructor');

  }

  ngOnInit() {
    console.log('Parent Component: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Parent Component: OnChanges');
  }

  ngAfterContentInit(): void {

   console.log("Parent Component: ngAfterContentInit");
  }

  ngAfterViewInit(): void {
    console.log("Parent Component: ngAfterViewInit");

  }
  
  NavigateToList(){
   this._Router.navigate([
    'inventory',
    'list',
    '2121'
   ],
   { queryParams:{
        DateTimeStamp: new Date().toLocaleTimeString()
   }
   }
  );
  }




}

export default ParentComponent;