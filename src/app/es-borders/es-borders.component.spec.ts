import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsBordersComponent } from './es-borders.component';

describe('EsBordersComponent', () => {
  let component: EsBordersComponent;
  let fixture: ComponentFixture<EsBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
