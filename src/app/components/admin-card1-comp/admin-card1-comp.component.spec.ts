import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCard1CompComponent } from './admin-card1-comp.component';

describe('AdminCard1CompComponent', () => {
  let component: AdminCard1CompComponent;
  let fixture: ComponentFixture<AdminCard1CompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCard1CompComponent]
    });
    fixture = TestBed.createComponent(AdminCard1CompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
