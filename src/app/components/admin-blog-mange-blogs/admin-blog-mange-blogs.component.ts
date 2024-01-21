import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-admin-blog-mange-blogs',
  templateUrl: './admin-blog-mange-blogs.component.html',
  styleUrls: ['./admin-blog-mange-blogs.component.css']
})
export class AdminBlogMangeBlogsComponent {

  blogs:any = {};
  blogId:any='';

  constructor(private route:ActivatedRoute , private blogService:BlogService ,private router: Router){}

  ngOnInit(){
    this.blogId=this.route.snapshot.paramMap.get('id');
    // alert(this.blogId);
    console.log(this.blogId);

    this.blogService.getBlogsByID(this.blogId).subscribe((res:any)=>{
      console.log(res)
      this.blogs=res;
    })
  }

  deleteBlog(event:any,blogId:number){
    if(confirm("Are You Sure Delete Blog")){
      event.target.innerText="Deleting ..";
      this.blogService.destoryBLog(blogId).subscribe((res:any)=>{
        this.navigateToBlog()
        alert(res.message)
      })
    }
  }

  navigateToBlog() {
    this.router.navigate(['/adminBlogs']);
  }


}
