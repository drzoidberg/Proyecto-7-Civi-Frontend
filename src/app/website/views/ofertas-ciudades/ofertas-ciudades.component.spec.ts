import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasCiudadesComponent } from './ofertas-ciudades.component';

describe('OfertasCiudadesComponent', () => {
  let component: OfertasCiudadesComponent;
  let fixture: ComponentFixture<OfertasCiudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasCiudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
