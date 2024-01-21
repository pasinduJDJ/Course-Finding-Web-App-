import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-full-course-detailes',
  templateUrl: './full-course-detailes.component.html',
  styleUrls: ['./full-course-detailes.component.css']
})
export class FullCourseDetailesComponent {
  courses:any = {};
  courseId:any='';

  constructor(private route:ActivatedRoute , private courseService :CourseService ,private router: Router){}

  ngOnInit(){
    this.courseId=this.route.snapshot.paramMap.get('id');
    // alert(this.blogId);
    console.log(this.courseId);

    this.courseService.getCoursesByID(this.courseId).subscribe((res:any)=>{
      console.log(res)
      this.courses=res;
    })
  }
}


