import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { MetadataWithCrt } from './metadata-config-with-crt';

@Injectable({
  providedIn: 'root',
})
export class MetadataConfigService {
    private readonly metadataWithCrt = MetadataWithCrt;
  constructor() {}
  public getMetadataConfig(){
    return of(this.metadataWithCrt);
  }
}
