import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesAddcoursesComponent } from './admin-courses-addcourses.component';

describe('AdminCoursesAddcoursesComponent', () => {
  let component: AdminCoursesAddcoursesComponent;
  let fixture: ComponentFixture<AdminCoursesAddcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursesAddcoursesComponent]
    });
    fixture = TestBed.createComponent(AdminCoursesAddcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
