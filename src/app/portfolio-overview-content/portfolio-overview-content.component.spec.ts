import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOverviewContentComponent } from './portfolio-overview-content.component';

describe('PortfolioOverviewContentComponent', () => {
  let component: PortfolioOverviewContentComponent;
  let fixture: ComponentFixture<PortfolioOverviewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOverviewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOverviewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
