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

@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css'],
})
export class MetadataFormComponent {
  @ViewChild('viewContainerRef') myForm!: any;
  public pageTitle = 'form';
  panelOpenState = false;

  metadata = {
    id: '',
    //id: parseInt('uuid()',10),
    metadataName: '',
    ipackName: '',
    version: '2',
    sections: [
      {
        steps: [
          {
            name: 'Overview',
            componentName: 'StaticContentComponent',
            title: '',
            description: '',
            config: {
              content: '',
              headers: [
                {
                  templateName: '',
                  headerString: '',
                },
              ],
            },
          },
          {
            componentName: 'APIDisplayComponent',
            config: {
              rows: [
                {
                  input: {
                    hint: '',
                    name: '',
                    placeholder: '',
                    type: '',
                    validations: [
                      {
                        type: '',
                        value: '',
                      },
                    ],
                  },
                },
              ],
              ddLabel: '',
              transferFieldKey: '',
              sourceApi: {
                path: '',
                authType: '',
                idField: '',
                labelField: '',
              },
              displayItems: [
                {
                  fieldName: '',
                  label: '',
                  secure: false,
                },
              ],
              testConfiguration: true,
              testApi: {
                authType: '',
              },
            },
            description: '',
            name: 'setup',
            title: '',
          },
        ],
      },
    ],
  };

  public headers: HeadersConfig[] = [];

  // public staticConfig: StaticConfig;

  submitted = false;

  constructor(private metaService: MetadataService, private router: Router) {}

  ngOnInit() {}

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
  addDisplayItem(displayItems: any)
  {
    displayItems.push({
        fieldName: '',
        label: '',
        secure: '',
      });
  }

  save(obj: any) {
    this.metaService
      .addMetadata(obj)
      .subscribe((result) => console.log(result));

    console.log(obj);
  }
  onSubmit(myForm: any) {
    this.headers.push({
      templateName: myForm.templateName,
      headerString: myForm.headerString,
    });

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
  }

  // save(id:any,obj: any) {

  //    const metadataModel:IMetadata= {
  //     id: id,
  //     metadata: obj
  //    }
  //   this.metaService.addMetadata(metadataModel)
  //   .subscribe((result) => console.log(result));

  //  // this.metadata = new IMetadata();

  // }

  // onSubmit(myForm: any) {
  //   const obj: metadataBody = {
  //       id: myForm.id,
  //       metadataName: myForm.metadataName,
  //       ipackName: myForm.ipackName,
  //       version: myForm.version
  //     }

  //   const obj1=JSON.stringify(obj);

  //   this.submitted = true;

  //   this.save(myForm.id,obj1);
  //   console.log(obj);

  // }

  get() {
    this.metaService.getData().subscribe((data) => {
      console.log(data);
    });
  }
  checkBoomi() {
    return true;
  }

  // let metadataMap = new Map<number,string>();
  // metadataMap.set()
  // function onSubmit( form: any ){
  //   var data = JSON.stringify((form).serializeArray() );

  //   console.log( data );
  //   return false; //don't submit
  // }
}
