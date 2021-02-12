import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaExposureMapComponent } from './corona-exposure-map.component';

describe('CoronaExposureMapComponent', () => {
  let component: CoronaExposureMapComponent;
  let fixture: ComponentFixture<CoronaExposureMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaExposureMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaExposureMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
