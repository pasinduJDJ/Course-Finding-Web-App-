import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersManageUsersComponent } from './admin-users-manage-users.component';

describe('AdminUsersManageUsersComponent', () => {
  let component: AdminUsersManageUsersComponent;
  let fixture: ComponentFixture<AdminUsersManageUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersManageUsersComponent]
    });
    fixture = TestBed.createComponent(AdminUsersManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
