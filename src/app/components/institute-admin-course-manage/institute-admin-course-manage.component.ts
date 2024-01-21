import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-institute-admin-course-manage',
  templateUrl: './institute-admin-course-manage.component.html',
  styleUrls: ['./institute-admin-course-manage.component.css']
})
export class InstituteAdminCourseManageComponent {
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
  deleteCourse(event:any,courseID:number){
    if(confirm("Are You Sure Delete Job")){
      event.target.innerText="Deleting ..";
      this.courseService.destoryCourses(courseID).subscribe((res:any)=>{
        this.navigateToCourse()
        alert(res.message)
      })
    }
  }
  navigateToCourse() {
    this.router.navigate(['/instituteCourses']);
  }
}
