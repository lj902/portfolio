import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesInfoComponent } from './references-info.component';

describe('ReferencesInfoComponent', () => {
  let component: ReferencesInfoComponent;
  let fixture: ComponentFixture<ReferencesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferencesInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencesInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
