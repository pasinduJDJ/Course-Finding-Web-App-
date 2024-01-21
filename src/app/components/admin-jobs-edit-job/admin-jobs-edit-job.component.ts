import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-admin-jobs-edit-job',
  templateUrl: './admin-jobs-edit-job.component.html',
  styleUrls: ['./admin-jobs-edit-job.component.css']
})
export class AdminJobsEditJobComponent {

  constructor(private route: ActivatedRoute, private jobServices:JobService,private router: Router){}

  job:any = {};
  jobId!:any;

  ngOnInit(){
    this.jobId=this.route.snapshot.paramMap.get('id');
    // alert(this.blogId);
    console.log(this.jobId);

    this.jobServices.getJobsByID(this.jobId).subscribe((res:any)=>{
      console.log(res)
      this.job=res;
    })

  }
  updateJob(){
    this.jobServices.updateJob(this.job).subscribe({
      next:(res:any)=>{
        console.log(res);
       if(res != null){
        alert("Job updated")
        this.navigateToJob()
        
       }
      },
      error:(err:any)=>{
        // this.errors=err.error.errors;
        console.log(err);
      }
    })
  }

  navigateToJob() {
    this.router.navigate(['/adminJobs']);
  }
}
