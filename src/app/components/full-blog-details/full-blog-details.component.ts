import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-full-blog-details',
  templateUrl: './full-blog-details.component.html',
  styleUrls: ['./full-blog-details.component.css']
})
export class FullBlogDetailsComponent {

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
}
