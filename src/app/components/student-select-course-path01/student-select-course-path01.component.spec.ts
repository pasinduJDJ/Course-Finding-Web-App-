import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectCoursePath01Component } from './student-select-course-path01.component';

describe('StudentSelectCoursePath01Component', () => {
  let component: StudentSelectCoursePath01Component;
  let fixture: ComponentFixture<StudentSelectCoursePath01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSelectCoursePath01Component]
    });
    fixture = TestBed.createComponent(StudentSelectCoursePath01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
