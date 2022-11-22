import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map } from 'rxjs';
import { boomiMockdata } from './env-extension-mockdata';
import { IMetadata } from './metadata';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MetadataService {
  // private metadataUrl = 'api/metadata/metadata.json';
  private metadataUrl = 'http://localhost:8080/api/v1/metadata';

  constructor(private http: HttpClient) {}

  getAllMetadata(): Observable<any[]> {
    return this.http
      .get<any[]>(this.metadataUrl)
      .pipe(tap((data) => console.log('All: ', JSON.stringify(data))));
  }

  getMetadatabyId(id: string): Observable<IMetadata | undefined> {
    return this.getAllMetadata().pipe(
      map((metadata: IMetadata[]) => metadata.find((p) => p.id === id))
    );
  }
  //by Anjesh

  public getData(): Observable<any> {
    return this.http.get(this.metadataUrl);
  }

  public getDataById(id: string): Observable<any> {
    return this.http.get(`${this.metadataUrl}/${id}`);
  }

  public addMetadata(user: any): Observable<any> {
    return this.http.post(`${this.metadataUrl}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
    // console.log(user);
    //return this.http.post(`${this.metadataUrl}`, JSON.stringify(user));
  }

  public deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.metadataUrl}/${id}`, {
      responseType: 'text',
    });
  }
  public getEnvionmentExtensionValues(name: string){
    //  const url='we need to give url';
    //  return this.http.get(url);
     return of(boomiMockdata);
  }
}
