import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyProblem } from './journey-problem';

describe('JourneyProblem', () => {
  let component: JourneyProblem;
  let fixture: ComponentFixture<JourneyProblem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyProblem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyProblem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
