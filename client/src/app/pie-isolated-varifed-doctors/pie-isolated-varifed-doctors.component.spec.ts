import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieIsolatedVarifedDoctorsComponent } from './pie-isolated-varifed-doctors.component';

describe('PieIsolatedVarifedDoctorsComponent', () => {
  let component: PieIsolatedVarifedDoctorsComponent;
  let fixture: ComponentFixture<PieIsolatedVarifedDoctorsComponent>;

  beforeEach(async(() => {
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
