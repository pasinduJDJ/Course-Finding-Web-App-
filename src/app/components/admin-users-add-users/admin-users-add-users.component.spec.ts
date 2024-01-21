import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersAddUsersComponent } from './admin-users-add-users.component';

describe('AdminUsersAddUsersComponent', () => {
  let component: AdminUsersAddUsersComponent;
  let fixture: ComponentFixture<AdminUsersAddUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersAddUsersComponent]
    });
    fixture = TestBed.createComponent(AdminUsersAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
