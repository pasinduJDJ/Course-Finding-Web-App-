import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-courses-addcourses',
  templateUrl: './admin-courses-addcourses.component.html',
  styleUrls: ['./admin-courses-addcourses.component.css']
})
export class AdminCoursesAddcoursesComponent {

  constructor(private courseService: CourseService, private router: Router) { }

  instituteName: String = '';
  courseName: string = '';
  courseImage: string = '';
  awardedUni: string = '';
  awardedUniImage: string = '';
  worldRanking: string = '';
  relatedIndustry: string = '';
  programmeType: string = '';
  programmeTime: string = '';
  programme: string = '';
  entryRequirement: string = '';
  courseStructure: string = '';
  fees: string = '';
  commencement: string = '';
  insId: string = '';

  createCourses() {
    var inputData = {
      instituteName: this.instituteName,
      courseName: this.courseName,
      courseImage: this.courseImage,
      awardedUni: this.awardedUni,
      awardedUniImage: this.awardedUniImage,
      worldRanking: this.worldRanking,
      relatedIndustry: this.relatedIndustry,
      programmeType: this.programmeType,
      programmeTime: this.programmeTime,
      programme: this.programme,
      entryRequirement: this.entryRequirement,
      courseStructure: this.courseStructure,
      fees: this.fees,
      commencement: this.commencement,
      insId: this.insId,
    }
    this.courseService.saveCourse(inputData).subscribe({
      next:(res:any) => {
        console.log(res);
        this.navigateTocourse()

      },
      error:(err:any) =>{
        console.log(err, 'errors');
      }
    })
  }
  navigateTocourse() {

  }
}
