import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsBordersContentComponent } from './es-borders-content.component';

describe('EsBordersContentComponent', () => {
  let component: EsBordersContentComponent;
  let fixture: ComponentFixture<EsBordersContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsBordersContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsBordersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
