import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiJourneyMap } from './ai-journey-map';

describe('AiJourneyMap', () => {
  let component: AiJourneyMap;
  let fixture: ComponentFixture<AiJourneyMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiJourneyMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiJourneyMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
