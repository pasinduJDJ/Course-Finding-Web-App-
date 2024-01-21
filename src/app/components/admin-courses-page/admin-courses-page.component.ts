import { Component } from '@angular/core';
import { CourseService ,CourseResponse} from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-courses-page',
  templateUrl: './admin-courses-page.component.html',
  styleUrls: ['./admin-courses-page.component.css']
})
export class AdminCoursesPageComponent {
  constructor(private courseService:CourseService){}

  courses: CourseResponse[]=[];
  noOfBlogs: string = "";

  ngOnInit(){
    this.getBlogList();
  }

  getBlogList(){
    this.courseService.getCourses().subscribe((res:any) =>{
      console.log(res.courses);
      this.courses = res;
      this.noOfBlogs = String(res.length);
    });
  }
}
