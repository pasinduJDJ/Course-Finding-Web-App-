import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobsAddJobsComponent } from './admin-jobs-add-jobs.component';

describe('AdminJobsAddJobsComponent', () => {
  let component: AdminJobsAddJobsComponent;
  let fixture: ComponentFixture<AdminJobsAddJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobsAddJobsComponent]
    });
    fixture = TestBed.createComponent(AdminJobsAddJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
