import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobsEditJobComponent } from './admin-jobs-edit-job.component';

describe('AdminJobsEditJobComponent', () => {
  let component: AdminJobsEditJobComponent;
  let fixture: ComponentFixture<AdminJobsEditJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobsEditJobComponent]
    });
    fixture = TestBed.createComponent(AdminJobsEditJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
