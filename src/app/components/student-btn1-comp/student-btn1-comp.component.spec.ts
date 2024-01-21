import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBtn1CompComponent } from './student-btn1-comp.component';

describe('StudentBtn1CompComponent', () => {
  let component: StudentBtn1CompComponent;
  let fixture: ComponentFixture<StudentBtn1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBtn1CompComponent]
    });
    fixture = TestBed.createComponent(StudentBtn1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
