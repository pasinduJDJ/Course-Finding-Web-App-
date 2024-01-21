import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBlogDetailsComponent } from './full-blog-details.component';

describe('FullBlogDetailsComponent', () => {
  let component: FullBlogDetailsComponent;
  let fixture: ComponentFixture<FullBlogDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullBlogDetailsComponent]
    });
    fixture = TestBed.createComponent(FullBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
