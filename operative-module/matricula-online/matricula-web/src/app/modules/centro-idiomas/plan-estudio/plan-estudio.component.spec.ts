import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEstudioComponent } from './plan-estudio.component';

describe('PlanEstudioComponent', () => {
  let component: PlanEstudioComponent;
  let fixture: ComponentFixture<PlanEstudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanEstudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanEstudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
