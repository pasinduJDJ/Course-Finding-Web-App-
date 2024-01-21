import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBtn1CompComponent } from './admin-btn1-comp.component';

describe('AdminBtn1CompComponent', () => {
  let component: AdminBtn1CompComponent;
  let fixture: ComponentFixture<AdminBtn1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBtn1CompComponent]
    });
    fixture = TestBed.createComponent(AdminBtn1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
