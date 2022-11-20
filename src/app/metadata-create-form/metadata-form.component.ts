/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/component-selector */
import { style } from '@angular/animations';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ApiDisplayConfig, HeadersConfig, IMetadata, StaticConfig } from '../metadata';
import { MetadataService } from '../metadata.service';
import * as uuid from 'uuid';
import { HeaderConfig } from '../Models/static-content/header-config.model';
import { MetadataModel } from '../Models/metadata.model';
import { MetadataWithCrt } from './metadata-configs/metadata-config-with-crt';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BoomiLogInPopUpComponent } from '../boomi-log-in-pop-up/boomi-log-in-pop-up.component';
import { NavigateEditMetadataService } from '../navigate-edit-metadata.service';
import { event } from 'jquery';
import { metadataParameterType } from '../metadata.constant';
import { metadataParameterTypeTip } from '../metadata.constant';
import { templateName } from '../metadata.constant';
import { IlpComponent } from '../ilp/ilp.component';

export interface DialogData {
  processName: string;
  processType: string;
}

export interface DialogDataIlp {
  name: string;
  description: string;
}

@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css'],
})
export class MetadataFormComponent {
  processName!: string;
  processType!: string;
  currentUrl!: string;
  
  name!: string;
  description!: string;

  readonly metadataParameterType= metadataParameterType;
  readonly metadataParameterTypeTip= metadataParameterTypeTip;
  readonly templateName= templateName;

  @ViewChild('viewContainerRef') myForm!: any;
  public pageTitle = 'form';
  panelOpenState = false;
  isIPackNameValidated = false;
  metadata: any;

  public headers: HeadersConfig[] = [];

  submitted = false;

  constructor(
    private metaService: MetadataService,
    private router: Router,
    public dialog: MatDialog,
    private navigateEditMetadataService: NavigateEditMetadataService,
    private route: ActivatedRoute,

  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
        this.route.params.subscribe((param) => {
          this.loadMetaData(param['id'])
        })
      }
    });
  }

  loadMetaData(id:string) {
    if (this.currentUrl.includes('editMetadata')) {
      this.metaService.getDataById(id).subscribe((data) => {
        this.metadata = JSON.parse(data.metadata);
      });
    } else {
      this.metadata = MetadataWithCrt;
      this.metadata.id = uuid.v4();      
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BoomiLogInPopUpComponent, {
      width: '250px',
      data: { processName: this.processName, processType: this.processType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.checkBoomi();
    });
  }

  openDialogIlp(): void {
    const dialogRef = this.dialog.open(IlpComponent, {
      height:'1000px',
      width: '2000px',
      data: { name: this.name, description: this.description },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
     // this.checkBoomi();
    });
  }

  ngOnInit() {
   
  }

  removeInput(index: any, headers: any) {
    headers.splice(index, 1);
  }

  removeRows(index: any, rows: any)
  {
    rows.splice(index, 1);
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
        defaultValue: '',
        hint: '',
        type: '',
        saveValueAsObjectConfiguration:{
          staticObjectProperties:{
            name:'',
            userPrompted: true,
            parameterType: true,
          }
        }
      },
      label: '',
    });
  }
  addFiles(files: any) {
    files.push({
      crtName: '',
      headerRow: '',
    });
  }

  save(obj: any) {
    this.metaService
      .addMetadata(obj)
      .subscribe((result) => {
        console.log(result)
        this.router.navigate(['/metadata']);
      }
      
      );
      
  }
  onSubmit() {
    const metadataObj: MetadataModel = {
      id: this.metadata.id,
      metadata: JSON.stringify(this.metadata),
    };
    this.save(metadataObj);
  }

  get() {
    this.metaService.getData().subscribe((data) => {
      console.log(data);
    });
  }
  checkBoomi() {
    if (this.metadata.iPackName) {
      this.isIPackNameValidated = true;
    }
    this.metaService.getEnvionmentExtensionValues(this.metadata.iPackName).subscribe(data=>{
        console.log(data);
        this.setUpPageMetadataValues(data);
    })
    
  }
  setUpPageMetadataValues(data: any)
  {
    const tempSetupMetadata={} as ApiDisplayConfig;
    // tempSetupMetadata.sourceApi=data.name; //only for understanding.
  }

  // reset()
  // {
  //    this.metadata.sections=[];
  // }

}
