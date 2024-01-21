import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersViewUserComponent } from './admin-users-view-user.component';

describe('AdminUsersViewUserComponent', () => {
  let component: AdminUsersViewUserComponent;
  let fixture: ComponentFixture<AdminUsersViewUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersViewUserComponent]
    });
    fixture = TestBed.createComponent(AdminUsersViewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
