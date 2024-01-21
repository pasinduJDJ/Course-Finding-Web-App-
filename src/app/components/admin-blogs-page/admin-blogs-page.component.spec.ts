import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogsPageComponent } from './admin-blogs-page.component';

describe('AdminBlogsPageComponent', () => {
  let component: AdminBlogsPageComponent;
  let fixture: ComponentFixture<AdminBlogsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogsPageComponent]
    });
    fixture = TestBed.createComponent(AdminBlogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
