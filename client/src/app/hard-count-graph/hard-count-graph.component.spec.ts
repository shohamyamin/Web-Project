import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardCountGraphComponent } from './hard-count-graph.component';

describe('HardCountGraphComponent', () => {
  let component: HardCountGraphComponent;
  let fixture: ComponentFixture<HardCountGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardCountGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardCountGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
