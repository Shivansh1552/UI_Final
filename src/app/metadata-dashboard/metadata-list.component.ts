import { Component, OnDestroy, OnInit } from "@angular/core";
import { data } from "jquery";
import { Subscription } from "rxjs";
import { IMetadata } from "../metadata";

import { MetadataService } from "../metadata.service";

@Component({
  templateUrl: './metadata-list.component.html',
  styleUrls: ['./metadata-list.component.css']
})
export class MetadataListComponent implements OnInit, OnDestroy {
  pageTitle = 'Metadata List';
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
 
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMetadata = this.performFilter(value);
  }

  filteredMetadata: IMetadata[] = [];
  metadata: IMetadata[] = [];

  constructor(private metaService: MetadataService) {}
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  

  performFilter(filterBy: string): any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.metadata.filter((metadata: IMetadata) =>
      metadata.metadata.ipackName.toLocaleLowerCase().includes(filterBy));
  }


  ngOnInit(): void {
    this.sub = this.metaService.getAllMetadata().subscribe({
      next: metadata => {
        this.metadata = metadata;
        this.filteredMetadata = this.metadata;
      },
      error: err => this.errorMessage = err
    });
  }

  jsonParse(data: any) {
    return JSON.parse(data);
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  deleteData(id:any)
  {
    this.metaService.deleteData(id).subscribe(data => {
      console.log("Deleted........");})
 }
}
