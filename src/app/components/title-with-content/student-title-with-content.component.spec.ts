import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTitleWithContentComponent } from './student-title-with-content.component';

describe('StudentTitleWithContentComponent', () => {
  let component: StudentTitleWithContentComponent;
  let fixture: ComponentFixture<StudentTitleWithContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTitleWithContentComponent]
    });
    fixture = TestBed.createComponent(StudentTitleWithContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
