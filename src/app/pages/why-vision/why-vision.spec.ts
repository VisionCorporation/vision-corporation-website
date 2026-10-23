import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyVision } from './why-vision';

describe('WhyVision', () => {
  let component: WhyVision;
  let fixture: ComponentFixture<WhyVision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyVision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyVision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
