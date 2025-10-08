import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurExpertise } from './our-expertise';

describe('OurExpertise', () => {
  let component: OurExpertise;
  let fixture: ComponentFixture<OurExpertise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurExpertise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurExpertise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
