import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSelectCoursePath02Component } from './student-select-course-path02.component';

describe('StudentSelectCoursePath02Component', () => {
  let component: StudentSelectCoursePath02Component;
  let fixture: ComponentFixture<StudentSelectCoursePath02Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentSelectCoursePath02Component]
    });
    fixture = TestBed.createComponent(StudentSelectCoursePath02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
