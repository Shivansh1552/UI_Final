import { Component, Input, OnInit } from '@angular/core';
import { DialogDataIlp } from '../metadata';

@Component({
  selector: 'pm-ilp-table',
  templateUrl: './ilp-table.component.html',
  styleUrls: ['./ilp-table.component.css']
})
export class IlpTableComponent implements OnInit {
  panelOpenState = false;
  @Input()
  ilpData!: DialogDataIlp[];
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
