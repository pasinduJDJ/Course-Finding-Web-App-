import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectCoursePath04Component } from './student-select-course-path04.component';

describe('StudentSelectCoursePath04Component', () => {
  let component: StudentSelectCoursePath04Component;
  let fixture: ComponentFixture<StudentSelectCoursePath04Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSelectCoursePath04Component]
    });
    fixture = TestBed.createComponent(StudentSelectCoursePath04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
