import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyWork } from './journey-work';

describe('JourneyWork', () => {
  let component: JourneyWork;
  let fixture: ComponentFixture<JourneyWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyWork);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
