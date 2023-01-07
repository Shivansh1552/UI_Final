import { TestBed } from '@angular/core/testing';

import { NavigateEditMetadataService } from './navigate-edit-metadata.service';

describe('NavigateEditMetadataService', () => {
  let service: NavigateEditMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateEditMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
