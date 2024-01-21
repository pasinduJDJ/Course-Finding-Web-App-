import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminCoursesComponent } from './institute-admin-courses.component';

describe('InstituteAdminCoursesComponent', () => {
  let component: InstituteAdminCoursesComponent;
  let fixture: ComponentFixture<InstituteAdminCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminCoursesComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
