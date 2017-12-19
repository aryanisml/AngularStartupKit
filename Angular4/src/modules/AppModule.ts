

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import InventoryModule from './InventoryModule';
import CommonModule from './CommonModule';

import AppComponent from '../components/AppComponent/AppComponent';


import GlobalRoutes from '../routings/globalroutes'

@NgModule(
    {
        imports: 
        [
            BrowserModule,
            RouterModule.forRoot(GlobalRoutes),
            InventoryModule,
            CommonModule
         
        ],

        declarations: 
        [
            AppComponent
         
         
        ],
        bootstrap: 
        [ 
            AppComponent 
        ]
       
       
    }
)

class AppModule 
{ 

}

export default AppModule

