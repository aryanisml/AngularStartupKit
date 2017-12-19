
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";

import AppComponent from '../components/AppComponent/AppComponent';
import InventoryComponent from '../components/InventoryComponent/InventoryComponent';
import InventoryListComponent from '../components/InventoryListComponent/InventoryListComponent';
import InventoryEntryComponent from '../components/InventoryEntryComponent/InventoryEntryComponent';
import { DataService } from '../services/DataService';

@NgModule(
    {
        imports: 
        [
            BrowserModule,
            FormsModule
        ],

        declarations: 
        [
            AppComponent,
            InventoryComponent,
            InventoryListComponent,
            InventoryEntryComponent
        ],
        bootstrap: 
        [ 
            AppComponent 
        ],
        providers:[
            DataService
        ]
       
    }
)

class AppModule 
{ 

}

export default AppModule

