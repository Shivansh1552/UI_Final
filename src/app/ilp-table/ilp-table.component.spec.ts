import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlpTableComponent } from './ilp-table.component';

describe('IlpTableComponent', () => {
  let component: IlpTableComponent;
  let fixture: ComponentFixture<IlpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlpTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
