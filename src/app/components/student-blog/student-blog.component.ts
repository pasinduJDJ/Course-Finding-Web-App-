import { Component } from '@angular/core';
import { bankResponse } from 'src/app/services/bank.service';
import { BlogService, blogResponse } from 'src/app/services/blog.service';

@Component({
  selector: 'app-student-blog',
  templateUrl: './student-blog.component.html',
  styleUrls: ['./student-blog.component.css']
})
export class StudentBlogComponent {
  constructor(private blogServce:BlogService){}

  blogs:bankResponse []=[];

  ngOnInit(){
    this.getBlogList();
  }

  getBlogList(){
    this.blogServce.getBlogs().subscribe((res:any) =>{
      console.log(res.blogs);
      this.blogs = res;
    });
  }
}
