import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { map, Subscription } from 'rxjs';
import { IMetadata } from '../metadata';

import { MetadataService } from '../metadata.service';
import { NavigateEditMetadataService } from '../navigate-edit-metadata.service';

@Component({
  templateUrl: './metadata-list.component.html',
  styleUrls: ['./metadata-list.component.css'],
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

  constructor(
    private metaService: MetadataService,
    private navigateEditMetadataService: NavigateEditMetadataService,
    private router: Router
  ) {}
  // ngOnInit(): void {
  //   throw new Error("Method not implemented.");
  // }

  performFilter(filterBy: string): any {
    filterBy = filterBy.toLocaleLowerCase();
    return this.metadata.filter((metadata: IMetadata) =>
      metadata.metadata.name.toLocaleLowerCase().includes(filterBy)
    );
  }

  ngOnInit(): void {
    this.sub = this.metaService
      .getAllMetadata()
      .pipe(
        map((res) => {
          return res.map((ele) => {
            return {
              ...ele,
              metadata: JSON.parse(ele.metadata),
            };
          });
        })
      )
      .subscribe({
        next: (metadata) => {
          this.metadata = metadata;
          this.filteredMetadata = this.metadata;
        },
        error: (err) => (this.errorMessage = err),
      });
  }

  editMetadata(metadata: any) {
    // this.navigateEditMetadataService.setMetadata(metadata);
    this.router.navigate(['editMetadata',metadata.id])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
  deleteData(id: any) {
    this.metaService.deleteData(id).subscribe((data) => {
      console.log('Deleted........');
    });
  }
 
  downloadJson(myJson: any){
    var sJson = JSON.stringify(myJson);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(sJson));
    element.setAttribute('download', `${myJson.name}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
}
}
