import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAperturaCursoComponent } from './solicitar-apertura-curso.component';

describe('SolicitarAperturaCursoComponent', () => {
  let component: SolicitarAperturaCursoComponent;
  let fixture: ComponentFixture<SolicitarAperturaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarAperturaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarAperturaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
