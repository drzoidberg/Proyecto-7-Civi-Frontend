import { TestBed } from '@angular/core/testing';

import { OfertasFiltrosService } from './ofertas-filtros.service';

describe('OfertasFiltrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertasFiltrosService = TestBed.get(OfertasFiltrosService);
    expect(service).toBeTruthy();
  });
});
