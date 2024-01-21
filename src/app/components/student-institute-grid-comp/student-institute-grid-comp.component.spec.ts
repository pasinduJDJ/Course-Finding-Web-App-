import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentInstituteGridCompComponent } from './student-institute-grid-comp.component';

describe('StudentInstituteGridCompComponent', () => {
  let component: StudentInstituteGridCompComponent;
  let fixture: ComponentFixture<StudentInstituteGridCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInstituteGridCompComponent]
    });
    fixture = TestBed.createComponent(StudentInstituteGridCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
