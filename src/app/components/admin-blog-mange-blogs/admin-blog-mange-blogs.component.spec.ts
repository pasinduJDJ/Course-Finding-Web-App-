import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogMangeBlogsComponent } from './admin-blog-mange-blogs.component';

describe('AdminBlogMangeBlogsComponent', () => {
  let component: AdminBlogMangeBlogsComponent;
  let fixture: ComponentFixture<AdminBlogMangeBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBlogMangeBlogsComponent]
    });
    fixture = TestBed.createComponent(AdminBlogMangeBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
