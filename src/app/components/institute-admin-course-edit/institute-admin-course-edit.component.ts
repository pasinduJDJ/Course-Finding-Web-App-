import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-institute-admin-course-edit',
  templateUrl: './institute-admin-course-edit.component.html',
  styleUrls: ['./institute-admin-course-edit.component.css']
})
export class InstituteAdminCourseEditComponent {

  constructor(private route: ActivatedRoute, private courseService: CourseService, private router: Router) { }
  course: any = {};
  courseId!: any;

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('id');
    console.log(this.courseId);

    this.courseService.getCoursesByID(this.courseId).subscribe((res: any) => {
      console.log(res)
      this.course = res;
    })

  }

  updateCourses() {
    if (this.course.fullName == null || this.course.fullName === '') {
      alert('Please Enter user Full name ');
    }else if(this.course.userName == null || this.course.userName === ''){
      alert('Please Enter user Login name ');
    }else if(this.course.userPassword == null || this.course.userPassword === ''){
      alert('Please Enter user Login Password ');
    }else if(this.course.userMobile == null || this.course.userMobile === ''){
      alert('Please Enter user Mobile Number ');
    }else if(this.course.userEmail == null || this.course.userEmail === ''){
      alert('Please Enter user Email ');
    }else if(this.course.insRegisterNo == null || this.course.insRegisterNo === ''){
      alert('Please Enter Institute Register Number ');
    }else if(this.course.insName == null || this.course.insName === ''){
      alert('Please Enter Institute Name ');
    }else if(this.course.insImageUrl == null || this.course.insImageUrl === ''){
      alert('Please Enter Institute Logo Url ');
    }else if(this.course.insLocation == null || this.course.insLocation === ''){
      alert('Please Enter Institute Branch Location ');
    }else if(this.course.insOverview == null || this.course.insOverview === ''){
      alert('Please Enter Institute Overview ');
    }else if(this.course.recommendedBankNo == null || this.course.recommendedBankNo === ''){
      alert('Please Enter Recommended BankS For Student');
    }else{
      this.courseService.updateCourse(this.course).subscribe({
        next:(res:any)=>{
          console.log(res);
         if(res != null){
          alert("Course Destails updated")
          this.navigateTocourse()
          
         }
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }

  }
  navigateTocourse() {
    this.router.navigate(['/instituteCourses']);
  }
}
