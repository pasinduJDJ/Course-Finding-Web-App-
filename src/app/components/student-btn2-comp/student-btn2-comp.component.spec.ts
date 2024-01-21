import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBtn2CompComponent } from './student-btn2-comp.component';

describe('StudentBtn2CompComponent', () => {
  let component: StudentBtn2CompComponent;
  let fixture: ComponentFixture<StudentBtn2CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBtn2CompComponent]
    });
    fixture = TestBed.createComponent(StudentBtn2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
