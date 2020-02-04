import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasCiudadComponent } from './ofertas-ciudad.component';

describe('OfertasCiudadComponent', () => {
  let component: OfertasCiudadComponent;
  let fixture: ComponentFixture<OfertasCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
