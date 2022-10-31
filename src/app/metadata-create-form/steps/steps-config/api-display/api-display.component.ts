import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({

  selector: 'app-api-display',
  templateUrl: './api-display.component.html',
  styleUrls: ['./api-display.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ApiDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() someEvent = new EventEmitter<string>();
}
