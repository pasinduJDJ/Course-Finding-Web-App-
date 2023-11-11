import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFooterCompComponent } from './student-footer-comp.component';

describe('StudentFooterCompComponent', () => {
  let component: StudentFooterCompComponent;
  let fixture: ComponentFixture<StudentFooterCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFooterCompComponent]
    });
    fixture = TestBed.createComponent(StudentFooterCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
