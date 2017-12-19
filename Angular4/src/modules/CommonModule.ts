
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from "@angular/forms";
import ParentComponent from "../components/Parent/ParentComponent";
import ChildComponent from "../components/Child/ChildComponent";

@NgModule(
    {
        imports: 
        [
            BrowserModule,
            FormsModule
         
        ],

        declarations: 
        [
           
            ParentComponent,
            ChildComponent
           
        ],
        bootstrap:[
            ParentComponent

        ],
        exports:[
            ParentComponent
           
        ]
        
       
    }
)

class CommonModule 
{ 

}

export default CommonModule

