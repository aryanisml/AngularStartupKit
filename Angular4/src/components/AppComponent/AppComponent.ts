import { Component, ViewEncapsulation } from "@angular/core";



@Component({
  //  moduleId: module.id,
  selector: 'web-app',
  templateUrl: './AppTemplate.html'
 
})
class AppComponent {

  private AppName: string;
  private AppVersion: number;
  private IsVisible :boolean;
  private versions:string[];
  private NewVersion:string;
  private ConditionStyle:any;
  private HeightLight:string;

  constructor() {
    this.AppName = "Angular";
    this.AppVersion = 5;
    this.IsVisible=false;
    this.versions=[
      '1.x',
      '2.x',
      '4.x'
    ]
    this.NewVersion='';
    this.ConditionStyle={
     // background:'yellow',
      color:'green',
      display:'block'

    }
  }
  HeighlightItem(){
    this.HeightLight="heighlight";
  }
  UnHeighlightItem(){
    this.HeightLight="";
  }
  ToggleVersions(){
    this.IsVisible=!this.IsVisible;
    if (this.IsVisible) {
      this.ConditionStyle.display="block";
    }else{
      this.ConditionStyle.display="none";
    }
    
  }

  AddVersion(){
    this.versions.push(this.NewVersion);
    console.table(this.versions);
    this.NewVersion="";
  }

  VersionChanged(event : any){
     this.NewVersion= event.target.value;
  }




}

export default AppComponent;