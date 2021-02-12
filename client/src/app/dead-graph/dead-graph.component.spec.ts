import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadGraphComponent } from './dead-graph.component';

describe('DeadGraphComponent', () => {
  let component: DeadGraphComponent;
  let fixture: ComponentFixture<DeadGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
