import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullJobDetailsComponent } from './full-job-details.component';

describe('FullJobDetailsComponent', () => {
  let component: FullJobDetailsComponent;
  let fixture: ComponentFixture<FullJobDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullJobDetailsComponent]
    });
    fixture = TestBed.createComponent(FullJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
