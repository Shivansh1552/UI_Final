/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../metadata-create-form/metadata-form.component';

@Component({
  selector: 'pm-boomi-log-in-pop-up',
  templateUrl: './boomi-log-in-pop-up.component.html',
  styleUrls: ['./boomi-log-in-pop-up.component.css']
})
export class BoomiLogInPopUpComponent implements OnInit {
  
  constructor(  public dialogRef: MatDialogRef<BoomiLogInPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }
  popUpClose()
  {
    this.dialogRef.close();
  }
  
}
