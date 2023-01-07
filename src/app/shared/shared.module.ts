import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    LoaderComponent
  ],
  declarations: [
    LoaderComponent
  ]
})
export class SharedModule { }
