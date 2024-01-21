import { Component } from '@angular/core';
import { JobService,jobResponse } from 'src/app/services/job.service';

@Component({
  selector: 'app-student-part-time-jobs',
  templateUrl: './student-part-time-jobs.component.html',
  styleUrls: ['./student-part-time-jobs.component.css']
})
export class StudentPartTimeJobsComponent {
  constructor(private jobServce:JobService){}

  jobs: jobResponse[]=[];

  ngOnInit(){
    this.getBlogList();
  }

  getBlogList(){
    this.jobServce.getJobs().subscribe((res:any) =>{
      console.log(res.blogs);
      this.jobs = res;
    });
  }
}
