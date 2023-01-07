import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IMetadata, Metadata } from './metadata';

@Injectable({
  providedIn: 'root',
})
export class NavigateEditMetadataService {
  private currentMetdata$ = new BehaviorSubject({} as Metadata);
  private _currentMetadata = this.currentMetdata$.asObservable();

  constructor() {}

  // public setMetadata(metadata: any) {
  //   this.currentMetdata$.next(metadata as Metadata);
  // }
  // public getMetadata() {
  //   return this._currentMetadata;
  // }
}
