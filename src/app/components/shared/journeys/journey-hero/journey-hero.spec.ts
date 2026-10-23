import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyHero } from './journey-hero';

describe('JourneyHero', () => {
  let component: JourneyHero;
  let fixture: ComponentFixture<JourneyHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
