import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogAddBlogsComponent } from './admin-blog-add-blogs.component';

describe('AdminBlogAddBlogsComponent', () => {
  let component: AdminBlogAddBlogsComponent;
  let fixture: ComponentFixture<AdminBlogAddBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogAddBlogsComponent]
    });
    fixture = TestBed.createComponent(AdminBlogAddBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
