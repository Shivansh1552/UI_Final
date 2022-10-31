import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataByIdComponent } from './get-data-by-id.component';

describe('GetDataByIdComponent', () => {
  let component: GetDataByIdComponent;
  let fixture: ComponentFixture<GetDataByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDataByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
