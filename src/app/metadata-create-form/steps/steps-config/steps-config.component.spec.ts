import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsConfigComponent } from './steps-config.component';

describe('StepsConfigComponent', () => {
  let component: StepsConfigComponent;
  let fixture: ComponentFixture<StepsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
