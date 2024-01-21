import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminEditProfileComponent } from './institute-admin-edit-profile.component';

describe('InstituteAdminEditProfileComponent', () => {
  let component: InstituteAdminEditProfileComponent;
  let fixture: ComponentFixture<InstituteAdminEditProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminEditProfileComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
