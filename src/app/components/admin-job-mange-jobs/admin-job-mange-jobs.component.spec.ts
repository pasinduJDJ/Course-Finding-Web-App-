import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobMangeJobsComponent } from './admin-job-mange-jobs.component';

describe('AdminJobMangeJobsComponent', () => {
  let component: AdminJobMangeJobsComponent;
  let fixture: ComponentFixture<AdminJobMangeJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminJobMangeJobsComponent]
    });
    fixture = TestBed.createComponent(AdminJobMangeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
