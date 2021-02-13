import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaInformationComponent } from './corona-information.component';

describe('CoronaInformationComponent', () => {
  let component: CoronaInformationComponent;
  let fixture: ComponentFixture<CoronaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
