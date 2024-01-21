import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCard2CompComponent } from './student-card2-comp.component';

describe('StudentCard2CompComponent', () => {
  let component: StudentCard2CompComponent;
  let fixture: ComponentFixture<StudentCard2CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCard2CompComponent]
    });
    fixture = TestBed.createComponent(StudentCard2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
