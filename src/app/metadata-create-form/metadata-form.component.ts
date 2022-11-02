/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/component-selector */
import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersConfig, IMetadata, StaticConfig } from '../metadata';
import { MetadataService } from '../metadata.service';
import * as uuid from 'uuid';
import { HeaderConfig } from '../Models/static-content/header-config.model';
import { MetadataModel } from '../Models/metadata.model';
import { MetadataWithCrt } from './metadata-configs/metadata-config-with-crt';

@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css'],
})
export class MetadataFormComponent {
  @ViewChild('viewContainerRef') myForm!: any;
  public pageTitle = 'form';
  panelOpenState = false;
  isIpackNameValidated= false;
  metadata = MetadataWithCrt;

  public headers: HeadersConfig[] = [];

  submitted = false;

  constructor(private metaService: MetadataService, private router: Router) {}

  ngOnInit() {
    this.metadata.id= uuid.v4();
  }

  removeInput(index: any) {
    this.headers.splice(index, 1);
  }
  getUUID() {
    // return  uuid();
    const id = uuid.v4();
    console.log(id);
    return id;
  }

  addHeaders(headers: any) {
    headers.push({
      templateName: '',
      headerString: '',
    });
  }
  addRows(rows: any) {
    rows.push({
      input: {
        hint: '',
        name: '',
        placeholder: '',
        type: '',
        validations: '',
      },
    });
  }
  addValidations(validations: any) {
    validations.push({
      type: '',
      value: '',
    });
  }
  addDisplayItem(displayItems: any) {
    displayItems.push({
      fieldName: '',
      label: '',
      secure: '',
    });
  }
  addRowsSpe(rows: any) {
    rows.push({
      input: {
        name: '',
        saveValueAsObjectConfiguration: '',
        defaultValue: '',
        hint: '',
        type: '',
      },
      label: '',
    });
  }

  save(obj: any) {
    this.metaService
      .addMetadata(obj)
      .subscribe((result) => console.log(result));

    console.log(obj);
  }
  onSubmit() {
    const metadataObj: MetadataModel = {
      id: this.metadata.id,
      metadata: JSON.stringify(this.metadata),
    };
    this.save(metadataObj);
  }

  // const obj: IMetadata = {
  //   id: myForm.id,
  //   //id: parseInt('uuid()',10),

  // };

  //const metadata = JSON.stringify(obj);
  // const metadataModel : MetadataModel = {
  //   id : myForm.id,
  //   metadata: metadata
  // }
  // this.save(metadataModel);

  // save(id:any,obj: any) {

  //    const metadataModel:IMetadata= {
  //     id: id,
  //     metadata: obj
  //    }
  //   this.metaService.addMetadata(metadataModel)
  //   .subscribe((result) => console.log(result));

  //  // this.metadata = new IMetadata();

  // }

  get() {
    this.metaService.getData().subscribe((data) => {
      console.log(data);
    });
  }
  checkBoomi() {
    if(this.metadata.ipackName){
      this.isIpackNameValidated = true;
    }
  }

  // let metadataMap = new Map<number,string>();
  // metadataMap.set()
  // function onSubmit( form: any ){
  //   var data = JSON.stringify((form).serializeArray() );

  //   console.log( data );
  //   return false; //don't submit
  // }
}
