import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminCourseEditComponent } from './institute-admin-course-edit.component';

describe('InstituteAdminCourseEditComponent', () => {
  let component: InstituteAdminCourseEditComponent;
  let fixture: ComponentFixture<InstituteAdminCourseEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminCourseEditComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminCourseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
