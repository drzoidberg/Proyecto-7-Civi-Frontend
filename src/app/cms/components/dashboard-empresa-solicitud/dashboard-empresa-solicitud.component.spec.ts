import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmpresaSolicitudComponent } from './dashboard-empresa-solicitud.component';

describe('DashboardEmpresaSolicitudComponent', () => {
  let component: DashboardEmpresaSolicitudComponent;
  let fixture: ComponentFixture<DashboardEmpresaSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEmpresaSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEmpresaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
