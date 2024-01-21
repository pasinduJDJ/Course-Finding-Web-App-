import { Component } from '@angular/core';
import { BlogService, blogResponse } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blogs-page',
  templateUrl: './admin-blogs-page.component.html',
  styleUrls: ['./admin-blogs-page.component.css']
})
export class AdminBlogsPageComponent {

  constructor(private blogServce: BlogService) { }

  blogs: blogResponse[] = [];
  noOfBlogs: string = "";

  ngOnInit() {
    this.getBlogList();
  }

  getBlogList() {
    this.blogServce.getBlogs().subscribe((res: any) => {
      console.log(res.blogs);
      this.blogs = res;
      this.noOfBlogs = String(res.length);

    });
  }
}
