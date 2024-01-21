import { Component } from '@angular/core';
import { CourseResponse, CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-courses.component.html',
  styleUrls: ['./student-courses.component.css']
})
export class StudentCoursesComponent {
  searchedCourses: any[] = [];
  courses: any[] = [];

  getCourseList(){
    this.courseSevices.getCourses().subscribe((res:any) =>{
      console.log(res.courses);
      this.courses = res;
      this.searchedCourses = this.courses;
    });
  }

  ngOnInit(){
    this.getCourseList();
  }

  constructor( private courseSevices:CourseService) {
    this.searchedCourses = this.courses;
  }

  onSearch(event: any) {
    this.searchedCourses = this.courses.filter(e =>
      String(e.courseName).toLowerCase().includes(String(event.target.value).trim().toLowerCase()));
  }
}
