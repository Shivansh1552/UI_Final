import { Component, OnInit, NgModule, ViewChild, Type, ComponentFactoryResolver,ViewContainerRef, ComponentRef, ElementRef, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

import { ApiDisplayComponent } from './api-display/api-display.component';

import { StaticContentComponent } from './static-content/static-content.component';

import { StaticPageEntryComponent } from './static-page-entry/static-page-entry.component';




@Component({

  selector: 'app-steps-config',

  templateUrl: './steps-config.component.html',

  styleUrls: ['./steps-config.component.css'],

  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]

})

export class StepsConfigComponent implements OnInit {

  @Input() myForm!: ElementRef;

  // getParentApi(): ParentComponentApi {
  //   return {
  //     removeStaticContent() : {
  //       this.removeStaticContent();
  //     }
  //   }
  // }



  constructor() { }



  ngOnInit(): void {

  }



 

 @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;

 ref!: ComponentRef<StaticContentComponent>

 ref1! : ComponentRef<ApiDisplayComponent>

 ref2! : ComponentRef<StaticPageEntryComponent>

 

 AddStaticContent(event:any) {
  
   this.ref = this.vcr.createComponent(StaticContentComponent)

 }



 AddApiDisplay(event:any) {

  this.ref1 = this.vcr.createComponent(ApiDisplayComponent)

}



AddStaticPageEntry(event:any) {

 
  this.ref2 = this.vcr.createComponent(StaticPageEntryComponent)

}

 

 removeStaticContent() {

   const index = this.vcr.indexOf(this.ref.hostView)

 

   if (index != -1)

      this.vcr.remove(index)

 }

}

// export interface ParentComponentApi {
//   removeStaticContent() : void
// }