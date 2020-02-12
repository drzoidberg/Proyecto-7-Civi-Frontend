import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasSalarioComponent } from './ofertas-salario.component';

describe('OfertasSalarioComponent', () => {
  let component: OfertasSalarioComponent;
  let fixture: ComponentFixture<OfertasSalarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasSalarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasSalarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
