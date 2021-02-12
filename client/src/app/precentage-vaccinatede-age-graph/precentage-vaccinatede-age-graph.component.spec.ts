import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecentageVaccinatedeAgeGraphComponent } from './precentage-vaccinatede-age-graph.component';

describe('PrecentageVaccinatedeAgeGraphComponent', () => {
  let component: PrecentageVaccinatedeAgeGraphComponent;
  let fixture: ComponentFixture<PrecentageVaccinatedeAgeGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecentageVaccinatedeAgeGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecentageVaccinatedeAgeGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
