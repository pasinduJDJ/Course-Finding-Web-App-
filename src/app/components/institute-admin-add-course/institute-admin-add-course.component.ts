import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-institute-admin-add-course',
  templateUrl: './institute-admin-add-course.component.html',
  styleUrls: ['./institute-admin-add-course.component.css']
})
export class InstituteAdminAddCourseComponent {

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
  coursetime: string = '';
  overallidea: string = '';

  createCourses() {
    if (this.instituteName == null || this.instituteName === '') {
      alert('Please Enter Institute name ');
    }else if(this.courseName == null || this.courseName === ''){
      alert('Please Enter Course name ');
    }else if(this.courseImage == null || this.courseImage === ''){
      alert('Please Enter Course Image');
    }else if(this.awardedUni == null || this.awardedUni === ''){
      alert('Please Enter Awarded University Name');
    }else if(this.awardedUniImage == null || this.awardedUniImage === ''){
      alert('Please Enter Awarded University Image URl');
    }else if(this.worldRanking == null || this.worldRanking === ''){
      alert('Please Enter Awarded University World Rank');
    }else if(this.relatedIndustry == null || this.relatedIndustry === ''){
      alert('Please Enter Related Industry ');
    }else if(this.programmeType == null || this.programmeType === ''){
      alert('Please Enter Program Type ');
    }else if(this.programmeTime == null || this.programmeTime === ''){
      alert('Please Enter Program Time ');
    }else if(this.programme == null || this.programme === ''){
      alert('Please Enter Program Name');
    }else if(this.entryRequirement == null || this.entryRequirement === ''){
      alert('Please Enter Entry Requirment');
    }else if(this.courseStructure == null || this.courseStructure === ''){
      alert('Please Enter Course Structure ');
    }else if(this.fees == null || this.fees === ''){
      alert('Please Enter Course Fees');
    }else if(this.commencement == null || this.commencement === ''){
      alert('Please Enter Commencement');
    }else if(this.insId == null || this.insId === ''){
      alert('Please Enter Institute Register No');
    }else if(this.coursetime == null || this.coursetime === ''){
      alert('Please Enter Course Duration');
    }else if(this.overallidea == null || this.overallidea === ''){
      alert('Please Enter Over All Idea');
    }else{
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
        coursetime: this.coursetime,
        overallidea: this.overallidea,
      }
      this.courseService.saveCourse(inputData).subscribe({
        next: (res: any) => {
          console.log(res);
          this.navigateTocourse()
  
        }, error: (err: any) => {
          console.log(err);
        }
  
      })
    } 
  }
  navigateTocourse() {
    this.router.navigate(['/instituteCourses']);
  }
}
