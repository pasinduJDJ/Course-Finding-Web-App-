import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoursesPageComponent } from './admin-courses-page.component';

describe('AdminCoursesPageComponent', () => {
  let component: AdminCoursesPageComponent;
  let fixture: ComponentFixture<AdminCoursesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoursesPageComponent]
    });
    fixture = TestBed.createComponent(AdminCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
