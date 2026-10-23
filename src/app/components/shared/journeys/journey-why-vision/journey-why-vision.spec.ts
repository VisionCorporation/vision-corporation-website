import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyWhyVision } from './journey-why-vision';

describe('JourneyWhyVision', () => {
  let component: JourneyWhyVision;
  let fixture: ComponentFixture<JourneyWhyVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyWhyVision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyWhyVision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
