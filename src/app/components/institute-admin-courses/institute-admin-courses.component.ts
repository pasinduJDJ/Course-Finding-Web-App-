import { Component } from '@angular/core';
import { CourseResponse, CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-institute-admin-courses',
  templateUrl: './institute-admin-courses.component.html',
  styleUrls: ['./institute-admin-courses.component.css']
})
export class InstituteAdminCoursesComponent {

  constructor(private courseService:CourseService){}

  courses: CourseResponse[]=[];

  ngOnInit(){

    const insRegiNumber= localStorage.getItem('UserID')!;
    console.log(insRegiNumber)

    this.courseService.getCoursesbyRegNo(insRegiNumber).subscribe((res:any) =>{
      console.log(res.courses);
      this.courses = res;
    });
  }

  getCourses(){
    // this.courseService.getCoursesbyRegNo().subscribe((res:any) =>{
    //   console.log(res.courses);
    //   this.courses = res;
    // });
  }
  // getCoursesByID(){
  //   this.courseService.getCoursesByID(this.insRegNo).subscribe((res: any) => {
  //     console.log(res)
  //     this.course = res;
  //   })
  // }
}
