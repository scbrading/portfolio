import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromIdeaToProdComponent } from './from-idea-to-prod.component';

describe('FromIdeaToProdComponent', () => {
  let component: FromIdeaToProdComponent;
  let fixture: ComponentFixture<FromIdeaToProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromIdeaToProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromIdeaToProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
