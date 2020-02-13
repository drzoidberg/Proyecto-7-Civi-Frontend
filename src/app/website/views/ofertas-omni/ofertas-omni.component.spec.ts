import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasOmniComponent } from './ofertas-omni.component';

describe('OfertasOmniComponent', () => {
  let component: OfertasOmniComponent;
  let fixture: ComponentFixture<OfertasOmniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasOmniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasOmniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
