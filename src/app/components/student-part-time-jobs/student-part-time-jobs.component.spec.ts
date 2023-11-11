import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentPartTimeJobsComponent } from './student-part-time-jobs.component';

describe('StudentPartTimeJobsComponent', () => {
  let component: StudentPartTimeJobsComponent;
  let fixture: ComponentFixture<StudentPartTimeJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentPartTimeJobsComponent]
    });
    fixture = TestBed.createComponent(StudentPartTimeJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
