import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaOnlineComponent } from './matricula-online.component';

describe('MatriculaOnlineComponent', () => {
  let component: MatriculaOnlineComponent;
  let fixture: ComponentFixture<MatriculaOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
