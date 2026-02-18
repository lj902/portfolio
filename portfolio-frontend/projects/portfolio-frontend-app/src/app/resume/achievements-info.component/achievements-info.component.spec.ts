import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsInfoComponent } from './achievements-info.component';

describe('AchievementsInfoComponent', () => {
  let component: AchievementsInfoComponent;
  let fixture: ComponentFixture<AchievementsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievementsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievementsInfoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
