import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParTimeJobsPageComponent } from './admin-par-time-jobs-page.component';

describe('AdminParTimeJobsPageComponent', () => {
  let component: AdminParTimeJobsPageComponent;
  let fixture: ComponentFixture<AdminParTimeJobsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminParTimeJobsPageComponent]
    });
    fixture = TestBed.createComponent(AdminParTimeJobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
