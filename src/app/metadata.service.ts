import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { IMetadata } from "./metadata";

@Injectable({
  providedIn: 'root'
})
export class MetadataService {
  // private metadataUrl = 'api/metadata/metadata.json';
   private metadataUrl= 'http://localhost:8080/api/v1/metadata';

   

  constructor(private http: HttpClient ) { }

  getAllMetadata(): Observable<IMetadata[]> {
    return this.http.get<IMetadata[]>(this.metadataUrl)
      .pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
      );
  }

  getMetadatabyId(id: number): Observable<IMetadata | undefined> {
    return this.getAllMetadata()
      .pipe(
        map((metadata: IMetadata[]) => metadata.find(p => p.id === id))
      );
  }
//by Anjesh

  
  public getData(): Observable<any> {
    return this.http.get(this.metadataUrl);
  }
 
 
  public getDataById(id: number): Observable<any> {
    return this.http.get(`${this.metadataUrl}/${id}`);
  }

  public addMetadata(user: any): Observable<any> {
     return this.http.post(`${this.metadataUrl}`, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     });
     // console.log(user);
    //return this.http.post(`${this.metadataUrl}`, JSON.stringify(user));
  }
  

  public deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.metadataUrl}/${id}`, { responseType: 'text' });
  }


}
