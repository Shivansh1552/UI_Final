/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogDataIlp } from '../metadata';

@Component({
  selector: 'pm-ilp-table',
  templateUrl: './ilp-table.component.html',
  styleUrls: ['./ilp-table.component.css']
})
export class IlpTableComponent implements OnInit {
  panelOpenState = false;
  @Output() editIlpRow: EventEmitter<any> = new EventEmitter();
  
  @Input()
  ilpData!: DialogDataIlp[];
  constructor() { }
 
  ngOnInit(): void {
  }
  editIlp(ilpRow :any){
    this.editIlpRow.emit(ilpRow);
  }


}
