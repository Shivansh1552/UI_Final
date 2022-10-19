import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPageEntryComponent } from './static-page-entry.component';

describe('StaticPageEntryComponent', () => {
  let component: StaticPageEntryComponent;
  let fixture: ComponentFixture<StaticPageEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticPageEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticPageEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
