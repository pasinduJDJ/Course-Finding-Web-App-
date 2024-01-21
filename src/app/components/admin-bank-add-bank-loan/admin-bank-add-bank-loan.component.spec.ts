import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankAddBankLoanComponent } from './admin-bank-add-bank-loan.component';

describe('AdminBankAddBankLoanComponent', () => {
  let component: AdminBankAddBankLoanComponent;
  let fixture: ComponentFixture<AdminBankAddBankLoanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBankAddBankLoanComponent]
    });
    fixture = TestBed.createComponent(AdminBankAddBankLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
