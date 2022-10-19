import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css'],
  
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class StaticContentComponent implements OnInit {

  @Output() someEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
