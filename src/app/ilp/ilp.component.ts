import { Component, Inject, OnInit } from '@angular/core';
import { CreateIlpComponent } from '../create-ilp/create-ilp.component';
import {
  DialogData,
  DialogDataIlp,
} from '../metadata-create-form/metadata-form.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogDataCreateIlp {
  name: string;
  description: string;
  value: string;
  defaultValue: string;
//  position: number;
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: string;
//   symbol: string;
// }

@Component({
  selector: 'pm-ilp',
  templateUrl: './ilp.component.html',
  styleUrls: ['./ilp.component.css'],
})
export class IlpComponent implements OnInit {
  name!: string;
  description!: string;
  value!: string;
  defaultValue!: string;

  
  //  ELEMENT_DATA: PeriodicElement[] = [
  //   {position: 1, name: 'Hydrogen', weight: 'Alok', symbol: 'H'},
  //   {position: 2, name: 'Hydrogen', weight: 'Alok', symbol: 'H'},
  // ];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<IlpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCreateIlp
  ) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
  popUpClose() {
    this.dialogRef.close();
  }
 

  openDialogCreateIlp(): void {
    const dialogRef = this.dialog.open(CreateIlpComponent, {
      height: '500px',
      width: '500px',
      data: { name: this.name, description: this.description ,value: this.value , defaultValue:this.defaultValue},
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
  // displayedColumns: string [] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = this.ELEMENT_DATA;
}
