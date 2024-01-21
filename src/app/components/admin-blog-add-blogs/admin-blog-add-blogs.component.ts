import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog-add-blogs',
  templateUrl: './admin-blog-add-blogs.component.html',
  styleUrls: ['./admin-blog-add-blogs.component.css']
})
export class AdminBlogAddBlogsComponent {

  userForm = new FormGroup({
    blogTitle: new FormControl(null, Validators.required),
    blogName: new FormControl(null, Validators.required),
    blogImageUrl: new FormControl(null, Validators.required),
    blogDetail: new FormControl(null, Validators.required),
    publishDate: new FormControl(null, Validators.required),
  })

  constructor(private blogService: BlogService,private router: Router) { }

  blogTitle: String = '';
  blogName: String = '';
  blogImageUrl: String = '';
  blogDetail: String = '';
  publishDate: String = '';

  createBlog() {

    var inputData = {
      blogTopic: this.blogTitle,
      blogName: this.blogName,
      blogImage: this.blogImageUrl,
      blogDetails: this.blogDetail,
      publishDate: this.publishDate,
    }

    this.blogService.createBlog(inputData).subscribe({
      next:(res:any) => {
        console.log(res);
        this.blogTitle='';
        this.blogName='';
        this.blogImageUrl='';
        this.blogDetail='';
        this.publishDate='';
        this.navigateToBlog()

      },
      error:(err:any) =>{
        console.log(err, 'errors');
      }
    })
  }

  navigateToBlog() {
    this.router.navigate(['/adminBlogs']);
  }

}
