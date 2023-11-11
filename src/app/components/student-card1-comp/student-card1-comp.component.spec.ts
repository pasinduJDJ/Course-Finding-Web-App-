import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCard1CompComponent } from './student-card1-comp.component';

describe('StudentCard1CompComponent', () => {
  let component: StudentCard1CompComponent;
  let fixture: ComponentFixture<StudentCard1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCard1CompComponent]
    });
    fixture = TestBed.createComponent(StudentCard1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
