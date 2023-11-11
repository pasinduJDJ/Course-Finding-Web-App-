import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHeaderCompComponent } from './student-header-comp.component';

describe('StudentHeaderCompComponent', () => {
  let component: StudentHeaderCompComponent;
  let fixture: ComponentFixture<StudentHeaderCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentHeaderCompComponent]
    });
    fixture = TestBed.createComponent(StudentHeaderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
