import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesAllCoursesComponent } from './admin-courses-all-courses.component';

describe('AdminCoursesAllCoursesComponent', () => {
  let component: AdminCoursesAllCoursesComponent;
  let fixture: ComponentFixture<AdminCoursesAllCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursesAllCoursesComponent]
    });
    fixture = TestBed.createComponent(AdminCoursesAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
