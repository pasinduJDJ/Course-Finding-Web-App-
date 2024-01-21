import { Component } from '@angular/core';
import { CourseResponse, CourseService } from 'src/app/services/course.service';
import { InstituteService,instituteResponse } from 'src/app/services/institute.service';

@Component({
  selector: 'app-institute-admin-home',
  templateUrl: './institute-admin-home.component.html',
  styleUrls: ['./institute-admin-home.component.css']
})
export class InstituteAdminHomeComponent {
  constructor(private instituteService: InstituteService,private courseSevices:CourseService) { }

  institute:any = {};
  courses: any[] = [];
  
  ngOnInit() {
    const insRegiNumber= localStorage.getItem('UserID')!;
    console.log(insRegiNumber)

    this.instituteService.getInsByInsRegID(insRegiNumber).subscribe((res:any)=>{
      this.institute = res[0];
      console.log(res)
    })

    this.courseSevices.getCoursesbyRegNo(insRegiNumber).subscribe((res:any) =>{
      console.log(res.courses);
      this.courses = res;
    });

  }



}
