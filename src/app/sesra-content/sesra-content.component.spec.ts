import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SesraContentComponent } from './sesra-content.component';

describe('SesraContentComponent', () => {
  let component: SesraContentComponent;
  let fixture: ComponentFixture<SesraContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesraContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SesraContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
