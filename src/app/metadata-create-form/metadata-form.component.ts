/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @angular-eslint/component-selector */
import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersConfig, IMetadata, metadataBody, StaticConfig } from '../metadata';
import { MetadataService } from '../metadata.service';
import { stringify, v4 as uuid } from 'uuid';
import { HeaderConfig } from '../Models/static-content/header-config.model';


@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css']
})
export class MetadataFormComponent {
  @ViewChild('viewContainerRef') myForm!: any;
   public pageTitle = 'form';
   panelOpenState = false;
 
  
   metadata: IMetadata = new IMetadata();
   
   public headers: HeadersConfig[] = [];

  // public staticConfig: StaticConfig;
  
  submitted = false;

  constructor(private metaService: MetadataService, private router: Router) { }

  ngOnInit() {
   
  }

  removeInput(index:any) {
    this.headers.splice(index,1)
  }

  addInput() {
    this.headers.push({
      templateName: '',
      headerString: ''
    });
  }

  save(obj: any) {

   this.metaService.addMetadata(obj)
   .subscribe((result) => console.log(result));
   
  console.log(obj);

 }
 onSubmit(myForm: any) {

    this.headers.push({
        templateName: myForm.templateName,
        headerString: myForm.headerString,
  })
  
  const obj: IMetadata={
         id: myForm.id,
        //id: parseInt('uuid()',10),
        metadata:
        {
            id: myForm.id,
            //id: parseInt('uuid()',10),
            metadataName: myForm.metadataName,
            ipackName: myForm.ipackName,
            version: myForm.version,
        
            section:
            {
              name : myForm.name,
              title :myForm.title,
              description:myForm.desc,
          
              staticConfig: {
                  content: myForm.content,
                  header: this.headers,
              },
              
              apiDisplayConfig:
              {
                   name1:  myForm.name1,
                   title1 :  myForm.title1,
                   description1 :  myForm.descrition1,
                  
                   rows : {
                    
                    hint:  myForm.hint,

                    name: myForm.name2,

                    placeholder : myForm.placeholder,

                    type:  myForm.type,
                      
                    validations:{
                                type: myForm.type1,
                                value: myForm.value,
                          }
 
                      },
       
                   ddLabel: myForm.ddLabel,
                 
                   transferFieldKey: myForm.tFK,
       
                   sourceApi:  {
                                path: myForm.path,
                                authtype: myForm.authType,
                                idField: myForm.idField,
           
                               labelField: myForm.LabelField,
                          },
             
                  displayItems:  {
                                     fieldName:  myForm.fieldName,
                                     label:  myForm.label,
                                     secure:  myForm.secure,
                                },
           
                 testConfigure: myForm.TestConfigure,
              
                  testApi:{
                           authtype: myForm.authType1,
                          }
            },
            staticPageEntryConfig :
            {
                  nameSpe: myForm.nameSpe,
                  titleSpe: myForm.titleSpe,
                  descriptionSpe: myForm.descriptionSpe,
              config:  {
 
                        valuePopulatedApi : {
                                                  url : myForm.urlSpe,
                                                  authType :myForm.authTypeSpe,
                                             },
             rowsSpe:  {
                    inputSpe :  {
                                       nameInputSpe :myForm.nameInputSpe,
                                       saveValueAsObjectConfiguration : {
                                                                             editableProperty : myForm.editableProperty,  
                                                                             staticObjectProperties :  {
                                                                                        nameSop : myForm.nameSop,
                                                                                        userPrompted:myForm.userPrompted,
                                                                                        parameterType :myForm.parameterType,
                                                                                      }
                                                                        },
                                      defaultValue :myForm.defaultValue,
                                      hint :myForm.hintSpe,
                                      type : myForm.typeSpe,
                              },
                                      label : myForm.labelSpe,
                    }
                    }

            }
            
            }
          }
         }
    
   this.save(obj);
  
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
  //   //console.log(obj);
  
  // }

  get()
  {
    this.metaService.getData().subscribe(data => {
      console.log(data);
    } ) 
  }
  checkBoomi()
  {
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

