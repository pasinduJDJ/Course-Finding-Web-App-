import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminCourseManageComponent } from './institute-admin-course-manage.component';

describe('InstituteAdminCourseManageComponent', () => {
  let component: InstituteAdminCourseManageComponent;
  let fixture: ComponentFixture<InstituteAdminCourseManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminCourseManageComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminCourseManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
