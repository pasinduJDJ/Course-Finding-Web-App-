import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteAdminHomeComponent } from './institute-admin-home.component';

describe('InstituteAdminHomeComponent', () => {
  let component: InstituteAdminHomeComponent;
  let fixture: ComponentFixture<InstituteAdminHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstituteAdminHomeComponent]
    });
    fixture = TestBed.createComponent(InstituteAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
