import { TestBed } from '@angular/core/testing';

import { ReportePagosService } from './reporte-pagos.service';

describe('ReportePagosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReportePagosService = TestBed.get(ReportePagosService);
    expect(service).toBeTruthy();
  });
});
