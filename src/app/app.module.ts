import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MetadataFormComponent } from './metadata-create-form/metadata-form.component';
import { RouterModule } from '@angular/router';
import { MetadataModule } from './metadata-dashboard/metadata.module';
import { MetadataListComponent } from './metadata-dashboard/metadata-list.component';
import { AddMetadataComponent } from './add-metadata/add-metadata.component';
import { GetDataComponent } from './get-data/get-data.component';
import { GetDataByIdComponent } from './get-data-by-id/get-data-by-id.component';

import {MaterialExampleModule} from '../app/material.module';
import { FormsModule } from '@angular/forms';
import { StepsComponent } from './metadata-create-form/steps/steps.component';
import { StepsConfigComponent } from './metadata-create-form/steps/steps-config/steps-config.component';
import { StaticContentComponent } from './metadata-create-form/steps/steps-config/static-content/static-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BoomiLogInPopUpComponent } from './boomi-log-in-pop-up/boomi-log-in-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    MetadataFormComponent,
    AddMetadataComponent,
    GetDataComponent,
    GetDataByIdComponent,
    StepsComponent,
    StepsConfigComponent,
    StaticContentComponent,
    BoomiLogInPopUpComponent
  ],
  imports: [
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'createMetadata', component: MetadataFormComponent},
      
      { path: '', redirectTo: 'metadata', pathMatch: 'full' },
      { path: '**', redirectTo: 'metadata', pathMatch: 'full' },
     // { path: 'add', component: AddMetadataComponent },
      { path: 'getData', component: GetDataComponent },
      // { path: 'getData/:id', component: GetDataByIdComponent }
    ]),
    MetadataModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
