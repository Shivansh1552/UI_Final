import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlpComponent } from './ilp.component';

describe('IlpComponent', () => {
  let component: IlpComponent;
  let fixture: ComponentFixture<IlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
