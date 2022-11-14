import { NgModule } from '@angular/core';
import { MetadataListComponent } from './metadata-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MetadataFormComponent } from '../metadata-create-form/metadata-form.component';

@NgModule({
  declarations: [
    MetadataListComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'metadata', component: MetadataListComponent },
      { path: 'editMetadata/:id', component: MetadataFormComponent},
    ]),
    SharedModule
  ]
})
export class MetadataModule { }
