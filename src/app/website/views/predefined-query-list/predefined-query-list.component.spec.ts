import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefinedQueryListComponent } from './predefined-query-list.component';

describe('PredefinedQueryListComponent', () => {
  let component: PredefinedQueryListComponent;
  let fixture: ComponentFixture<PredefinedQueryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredefinedQueryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredefinedQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
