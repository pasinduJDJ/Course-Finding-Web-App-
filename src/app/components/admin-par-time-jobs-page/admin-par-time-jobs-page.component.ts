import { Component } from '@angular/core';
import { JobService, jobResponse } from 'src/app/services/job.service';

@Component({
  selector: 'app-admin-par-time-jobs-page',
  templateUrl: './admin-par-time-jobs-page.component.html',
  styleUrls: ['./admin-par-time-jobs-page.component.css']
})
export class AdminParTimeJobsPageComponent {
  constructor(private jobServce:JobService){}

  jobs: jobResponse[]=[];
  noOfBlogs: string = "";

  ngOnInit(){
    this.getBlogList();
  }

  getBlogList(){
    this.jobServce.getJobs().subscribe((res:any) =>{
      console.log(res.blogs);
      this.jobs = res;
      this.noOfBlogs = String(res.length);
    });
  }
}
