import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWorkWithUs } from './why-work-with-us';

describe('WhyWorkWithUs', () => {
  let component: WhyWorkWithUs;
  let fixture: ComponentFixture<WhyWorkWithUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWorkWithUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWorkWithUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
