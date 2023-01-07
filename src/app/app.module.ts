import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MetadataFormComponent } from './metadata-create-form/metadata-form.component';
import { RouterModule } from '@angular/router';
import { MetadataModule } from './metadata-dashboard/metadata.module';
import { MetadataListComponent } from './metadata-dashboard/metadata-list.component';
import {MaterialExampleModule} from '../app/material.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { BoomiLogInPopUpComponent } from './boomi-log-in-pop-up/boomi-log-in-pop-up.component';
import { IlpComponent} from './ilp/ilp.component';
import { IlpTableComponent } from './ilp-table/ilp-table.component';
import { SharedModule } from './shared/shared.module';
import { OverviewComponent } from './overview/overview.component';
import { SetupComponent } from './setup/setup.component';
import { ParameterComponent } from './parameter/parameter.component';

@NgModule({
  declarations: [
    AppComponent,
    BoomiLogInPopUpComponent,
    IlpComponent,
    MetadataFormComponent,
    IlpTableComponent,
    OverviewComponent,
    SetupComponent,
    ParameterComponent
  ],
  imports: [
    MaterialExampleModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'createMetadata', component: MetadataFormComponent},
      { path: '', redirectTo: 'metadata', pathMatch: 'full' },
      { path: '**', redirectTo: 'metadata', pathMatch: 'full' },
    ]),
    MetadataModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
