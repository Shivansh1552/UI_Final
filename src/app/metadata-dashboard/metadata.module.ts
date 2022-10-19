import { NgModule } from '@angular/core';
import { MetadataListComponent } from './metadata-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MetadataListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'metadata', component: MetadataListComponent },
    ]),
    SharedModule
  ]
})
export class MetadataModule { }
