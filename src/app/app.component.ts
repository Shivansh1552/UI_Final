import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div class="d-flex align-items-center justify-content-center ">
        <h2>{{pageTitle}}</h2>
        </div>
        <div class="d-flex align-items-center justify-content-center" style="margin:20px 0px;">
        <ul class='nav nav-pills'>
          <li><a class="btn btn-success" routerLinkActive='active' routerLink='/metadata'>Metadata List</a></li>
          <li><a class="btn btn-success btn-space" routerLinkActive='active' routerLink='/createMetadata'>Create</a></li>
        </ul>
        </div>
    
    
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Metadata Automation Dashboard';
}
