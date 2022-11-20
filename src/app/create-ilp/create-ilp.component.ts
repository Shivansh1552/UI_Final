import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataCreateIlp } from '../ilp/ilp.component';
import { DialogData, DialogDataIlp } from '../metadata-create-form/metadata-form.component';


@Component({
  selector: 'pm-create-ilp',
  templateUrl: './create-ilp.component.html',
  styleUrls: ['./create-ilp.component.css']
})
export class CreateIlpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CreateIlpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataCreateIlp) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  popUpClose()
  {
    this.dialogRef.close();
  }
}
