import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIlpComponent } from './create-ilp.component';

describe('CreateIlpComponent', () => {
  let component: CreateIlpComponent;
  let fixture: ComponentFixture<CreateIlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
