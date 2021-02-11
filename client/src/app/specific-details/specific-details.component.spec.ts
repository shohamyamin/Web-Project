import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecificDetailsComponent } from './specific-details.component';

describe('SpecificDetailsComponent', () => {
  let component: SpecificDetailsComponent;
  let fixture: ComponentFixture<SpecificDetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
