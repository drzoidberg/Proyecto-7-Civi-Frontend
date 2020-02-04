import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAnuncioComponent } from './ofertas-anuncio.component';

describe('OfertasAnuncioComponent', () => {
  let component: OfertasAnuncioComponent;
  let fixture: ComponentFixture<OfertasAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
