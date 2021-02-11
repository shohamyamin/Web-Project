import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PieIsolatedVarifedDoctorsComponent } from './pie-isolated-varifed-doctors.component';

describe('PieIsolatedVarifedDoctorsComponent', () => {
  let component: PieIsolatedVarifedDoctorsComponent;
  let fixture: ComponentFixture<PieIsolatedVarifedDoctorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PieIsolatedVarifedDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PieIsolatedVarifedDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
