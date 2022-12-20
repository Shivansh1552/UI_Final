import { Component, Input, OnInit } from '@angular/core';
import { Step } from '../metadata';

@Component({
  selector: 'pm-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() step: any = {
    name: 'Overview',
    componentName: 'StaticContentComponent',
    title: 'Overview',
    description: '',
    config: {
      content: '',
    //   headers: [],
    },
  };
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }
  removeInput(index: any, headers: any) {
    headers.splice(index, 1);
  }
  addHeaders(config: any) {
    if(!config?.headers?.length){
        config['headers']=[];
    }
    config['headers'].push({
      templateName: '',
      sourceFileHeaders: '',
    });
  }
}
