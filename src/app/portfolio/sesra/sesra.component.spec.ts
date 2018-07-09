import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesraComponent } from './sesra.component';

describe('SesraComponent', () => {
  let component: SesraComponent;
  let fixture: ComponentFixture<SesraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
