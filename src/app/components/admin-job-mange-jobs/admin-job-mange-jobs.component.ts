import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-admin-job-mange-jobs',
  templateUrl: './admin-job-mange-jobs.component.html',
  styleUrls: ['./admin-job-mange-jobs.component.css']
})
export class AdminJobMangeJobsComponent {
  jobs:any = {};
  jobId:any='';
  constructor(private route:ActivatedRoute , private jobservice:JobService ,private router: Router){}

  ngOnInit(){
    this.jobId=this.route.snapshot.paramMap.get('id');
    console.log(this.jobId);

    this.jobservice.getJobsByID(this.jobId).subscribe((res:any)=>{
      console.log(res)
      this.jobs=res;
    })
  }
  deleteJob(event:any,jobId:number){
    if(confirm("Are You Sure Delete Job")){
      event.target.innerText="Deleting ..";
      this.jobservice.destoryJob(jobId).subscribe((res:any)=>{
        this.navigateToJob()
        alert(res.message)
      })
    }
  }
  navigateToJob() {
    this.router.navigate(['/adminJobs']);
  }
}
