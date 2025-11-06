import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNewsletter } from './send-newsletter';

describe('SendNewsletter', () => {
  let component: SendNewsletter;
  let fixture: ComponentFixture<SendNewsletter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendNewsletter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendNewsletter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
