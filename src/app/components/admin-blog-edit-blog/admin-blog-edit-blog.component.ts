import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog-edit-blog',
  templateUrl: './admin-blog-edit-blog.component.html',
  styleUrls: ['./admin-blog-edit-blog.component.css']
})
export class AdminBlogEditBlogComponent {

  constructor(private route: ActivatedRoute, private blogServices:BlogService,private router: Router){}

  blog:any = {};
  blogId!:any;

  userForm = new FormGroup({
    blogTopic: new FormControl(null, Validators.required),
    blogName: new FormControl(null, Validators.required),
    blogImage: new FormControl(null, Validators.required),
    blogDetails: new FormControl(null, Validators.required),
    publishDate: new FormControl(null, Validators.required),
  });

  ngOnInit(){
    this.blogId=this.route.snapshot.paramMap.get('id');
    console.log(this.blogId);

    this.blogServices.getBlogsByID(this.blogId).subscribe((res:any)=>{
      console.log(res)
      this.blog=res;
    })

  }

  updateBlog(){
    this.blogServices.updateStudent(this.blog).subscribe({
      next:(res:any)=>{
        console.log(res);
       if(res != null){
        alert("Blog updated")
        this.navigateToBlog()
        
       }
      },
      error:(err:any)=>{
        // this.errors=err.error.errors;
        console.log(err);
      }
    })
  }
  navigateToBlog() {
    this.router.navigate(['/adminBlogs']);
  }
}
