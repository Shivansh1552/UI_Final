import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogDataIlp } from '../metadata';

export interface DialogDataCreateIlp {
  name: string;
  description: string;
  value: string;
  defaultValue: boolean;
  show?:string;
}
@Component({
  selector: 'pm-ilp',
  templateUrl: './ilp.component.html',
  styleUrls: ['./ilp.component.css'],
})
export class IlpComponent implements OnInit {
  name!: string;
  description!: string;
  value!: string;
  defaultValue!: boolean;
  newDynamic: any = {}; 

  ilpRows: any[]=[]; 
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<IlpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataIlp
  ) {
     this.ilpRows=data.listOptions;
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  popUpClose() {
    this.ilpRows.forEach(element=>{
      delete element.show;
    })
    this.dialogRef.close({
      name:this.data.name,
      description:this.data.description,
      listOptions:this.ilpRows,
    });
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  } 
  addIlpRows()
  {
    this.ilpRows.push({
      name:'',
      description:'',
      value:'',
      defaultValue: false,
      show:'edit'
    })
  }
  saveIlp(rowData: any){
     rowData.show='save';
  }
  editIlp(rowData:any){
    rowData.show='edit';
  }
  deleteIlp(ilpRows:any,index: number){
    ilpRows.splice(index,1);
  }

 
}
