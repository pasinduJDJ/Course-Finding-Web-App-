import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCard2CompComponent } from './admin-card2-comp.component';

describe('AdminCard2CompComponent', () => {
  let component: AdminCard2CompComponent;
  let fixture: ComponentFixture<AdminCard2CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCard2CompComponent]
    });
    fixture = TestBed.createComponent(AdminCard2CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
