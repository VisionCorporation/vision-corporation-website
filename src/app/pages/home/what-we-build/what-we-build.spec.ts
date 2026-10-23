import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeBuild } from './what-we-build';

describe('WhatWeBuild', () => {
  let component: WhatWeBuild;
  let fixture: ComponentFixture<WhatWeBuild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeBuild]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WhatWeBuild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
