import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealitySection } from './reality-section';

describe('RealitySection', () => {
  let component: RealitySection;
  let fixture: ComponentFixture<RealitySection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealitySection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealitySection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
