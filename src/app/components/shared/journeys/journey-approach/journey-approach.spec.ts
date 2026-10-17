import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyApproach } from './journey-approach';

describe('JourneyApproach', () => {
  let component: JourneyApproach;
  let fixture: ComponentFixture<JourneyApproach>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyApproach]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyApproach);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
