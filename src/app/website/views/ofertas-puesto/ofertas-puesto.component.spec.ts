import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasPuestoComponent } from './ofertas-puesto.component';

describe('OfertasPuestoComponent', () => {
  let component: OfertasPuestoComponent;
  let fixture: ComponentFixture<OfertasPuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasPuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasPuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
