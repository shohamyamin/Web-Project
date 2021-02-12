import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositivePrecentageTestsGraphComponent } from './positive-precentage-tests-graph.component';

describe('PositivePrecentageTestsGraphComponent', () => {
  let component: PositivePrecentageTestsGraphComponent;
  let fixture: ComponentFixture<PositivePrecentageTestsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositivePrecentageTestsGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositivePrecentageTestsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
