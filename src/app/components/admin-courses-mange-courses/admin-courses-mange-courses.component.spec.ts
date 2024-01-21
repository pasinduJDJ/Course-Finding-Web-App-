import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesMangeCoursesComponent } from './admin-courses-mange-courses.component';

describe('AdminCoursesMangeCoursesComponent', () => {
  let component: AdminCoursesMangeCoursesComponent;
  let fixture: ComponentFixture<AdminCoursesMangeCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursesMangeCoursesComponent]
    });
    fixture = TestBed.createComponent(AdminCoursesMangeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
