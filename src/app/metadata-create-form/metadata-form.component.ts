import { style } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IMetadata, metadataBody, StaticConfig } from '../metadata';
import { MetadataService } from '../metadata.service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-metadata-form',
  templateUrl: './metadata-form.component.html',
  styleUrls: ['./metadata-form.component.css']
})
export class MetadataFormComponent {
  @ViewChild('viewContainerRef') myForm!: any;
   public pageTitle = 'form';
   metadata: IMetadata = new IMetadata();
   staticConfig: StaticConfig[] = [];
  
  
  submitted = false;

  constructor(private metaService: MetadataService, private router: Router) { }

  ngOnInit() {
   
  }
  save(obj: any) {

   this.metaService.addMetadata(obj)
   .subscribe((result) => console.log(result));
   
  // this.metadata = new IMetadata();
  console.log(obj);

 }
 onSubmit(myForm: any) {
  this.staticConfig.push({
    content: myForm.content,
    templateName: myForm.tempName,
    headers: myForm.headers,
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
          
                staticconfig: this.staticConfig
              
             
            //  ApiDisplayConfig:
            //  {
            //      hint: string,
            //      name: string,
            //      title : string,
            
            //      placeholder : string,
            //      type: string,
            //      testConfiguration: boolean,
            //       testApi: ConnectionItem,
      
            //       ddLabel: string,
                
            //       transferFieldKey: string,
      
            //       sourceApi: SourceApi
            //       {
            //         path:string,
            //         idField:string,
            //         labelField:string
            //       }
            //      displayItems: DisplayItem
            //      {
            //       fieldName: string,
            //       label: string,
            //       secure: boolean
            //      }
            //  }
             
            
             
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

