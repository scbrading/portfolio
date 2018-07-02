import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProjectsContentComponent } from './special-projects-content.component';

describe('SpecialProjectsContentComponent', () => {
  let component: SpecialProjectsContentComponent;
  let fixture: ComponentFixture<SpecialProjectsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialProjectsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialProjectsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
