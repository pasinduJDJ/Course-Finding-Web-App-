import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInstituteComponent } from './student-institute.component';

describe('StudentInstituteComponent', () => {
  let component: StudentInstituteComponent;
  let fixture: ComponentFixture<StudentInstituteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInstituteComponent]
    });
    fixture = TestBed.createComponent(StudentInstituteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
