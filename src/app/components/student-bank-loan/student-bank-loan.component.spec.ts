import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentBankLoanComponent } from './student-bank-loan.component';

describe('StudentBankLoanComponent', () => {
  let component: StudentBankLoanComponent;
  let fixture: ComponentFixture<StudentBankLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentBankLoanComponent]
    });
    fixture = TestBed.createComponent(StudentBankLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
