import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectCoursePath03Component } from './student-select-course-path03.component';

describe('StudentSelectCoursePath03Component', () => {
  let component: StudentSelectCoursePath03Component;
  let fixture: ComponentFixture<StudentSelectCoursePath03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSelectCoursePath03Component]
    });
    fixture = TestBed.createComponent(StudentSelectCoursePath03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
