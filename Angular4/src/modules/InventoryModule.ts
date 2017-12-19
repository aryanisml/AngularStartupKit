
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import InventoryComponent from '../components/InventoryComponent/InventoryComponent';
import InventoryListComponent from '../components/InventoryListComponent/InventoryListComponent';
import InventoryEntryComponent from '../components/InventoryEntryComponent/InventoryEntryComponent';
import NotificationComponent from '../components/NotificationComponent/NotificationComponent';
import { DataService } from '../services/DataService';
import  NotificationService from '../services/NotificationService';


import InventoryRoutes from '../routings/inventoryroutes';
import {SortPipe} from "../pipes/SortPipe";

@NgModule(
    {
        imports: 
        [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(InventoryRoutes)
            
        ],

        declarations: 
        [
         
            InventoryComponent,
            InventoryListComponent,
            InventoryEntryComponent,
            NotificationComponent,
            SortPipe
           
        ],
      
        providers:[
            DataService,
            NotificationService
     
        ],
        bootstrap:[
        InventoryComponent
     

        ],
        exports:[
            InventoryComponent,
            NotificationComponent,
            SortPipe
        ]
       
    }
)

class InventoryModule 
{ 

}

export default InventoryModule

