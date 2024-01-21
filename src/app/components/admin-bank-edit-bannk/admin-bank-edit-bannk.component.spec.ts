import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBankEditBannkComponent } from './admin-bank-edit-bannk.component';

describe('AdminBankEditBannkComponent', () => {
  let component: AdminBankEditBannkComponent;
  let fixture: ComponentFixture<AdminBankEditBannkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBankEditBannkComponent]
    });
    fixture = TestBed.createComponent(AdminBankEditBannkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
