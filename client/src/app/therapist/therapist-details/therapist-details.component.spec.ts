import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistDetailsComponent } from './therapist-details.component';

describe('TherapistDetailsComponent', () => {
  let component: TherapistDetailsComponent;
  let fixture: ComponentFixture<TherapistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
