import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogEditBlogComponent } from './admin-blog-edit-blog.component';

describe('AdminBlogEditBlogComponent', () => {
  let component: AdminBlogEditBlogComponent;
  let fixture: ComponentFixture<AdminBlogEditBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogEditBlogComponent]
    });
    fixture = TestBed.createComponent(AdminBlogEditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
