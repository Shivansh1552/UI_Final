import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomiLogInPopUpComponent } from './boomi-log-in-pop-up.component';

describe('BoomiLogInPopUpComponent', () => {
  let component: BoomiLogInPopUpComponent;
  let fixture: ComponentFixture<BoomiLogInPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoomiLogInPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoomiLogInPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
