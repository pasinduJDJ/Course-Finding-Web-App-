import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankLoansPageComponent } from './admin-bank-loans-page.component';

describe('AdminBankLoansPageComponent', () => {
  let component: AdminBankLoansPageComponent;
  let fixture: ComponentFixture<AdminBankLoansPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBankLoansPageComponent]
    });
    fixture = TestBed.createComponent(AdminBankLoansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
