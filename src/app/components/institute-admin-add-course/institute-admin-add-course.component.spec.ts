import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminAddCourseComponent } from './institute-admin-add-course.component';

describe('InstituteAdminAddCourseComponent', () => {
  let component: InstituteAdminAddCourseComponent;
  let fixture: ComponentFixture<InstituteAdminAddCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminAddCourseComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminAddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
