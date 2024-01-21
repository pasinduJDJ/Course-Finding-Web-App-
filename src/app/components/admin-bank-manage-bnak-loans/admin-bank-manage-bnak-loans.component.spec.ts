import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankManageBnakLoansComponent } from './admin-bank-manage-bnak-loans.component';

describe('AdminBankManageBnakLoansComponent', () => {
  let component: AdminBankManageBnakLoansComponent;
  let fixture: ComponentFixture<AdminBankManageBnakLoansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBankManageBnakLoansComponent]
    });
    fixture = TestBed.createComponent(AdminBankManageBnakLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
