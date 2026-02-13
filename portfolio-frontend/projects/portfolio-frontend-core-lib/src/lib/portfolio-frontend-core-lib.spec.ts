import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFrontendCoreLib } from './portfolio-frontend-core-lib';

describe('PortfolioFrontendCoreLib', () => {
  let component: PortfolioFrontendCoreLib;
  let fixture: ComponentFixture<PortfolioFrontendCoreLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioFrontendCoreLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioFrontendCoreLib);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
