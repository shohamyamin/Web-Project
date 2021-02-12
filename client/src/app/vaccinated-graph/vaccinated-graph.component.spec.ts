import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinatedGraphComponent } from './vaccinated-graph.component';

describe('VaccinatedGraphComponent', () => {
  let component: VaccinatedGraphComponent;
  let fixture: ComponentFixture<VaccinatedGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinatedGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinatedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
