import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-admin-jobs-add-jobs',
  templateUrl: './admin-jobs-add-jobs.component.html',
  styleUrls: ['./admin-jobs-add-jobs.component.css']
})
export class AdminJobsAddJobsComponent {

  constructor(private jobServise: JobService,private router: Router) { }

  jobTitle: String = '';
  jobImage: string = '';
  overview: string = '';
  jobType: string = '';
  position: string = '';
  qulification: string = '';
  jobMode: string = '';
  income: string = '';
  companyMoblie: string = '';
  jobEmail: string = '';

  

  createJob() {
    var inputData = {
      jobTitle: this.jobTitle,
      jobImage: this.jobImage,
      overview: this.overview,
      jobType: this.jobType,
      position: this.position,
      qulification: this.qulification,
      jobMode: this.jobMode,
      income: this.income,
      companyMoblie: this.companyMoblie,
      jobEmail: this.jobEmail
    }

    this.jobServise.saveJob(inputData).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.navigateToJob()

      },error:(err:any) =>{
        console.log(err);
      }
      
    })
  }
  navigateToJob() {
    this.router.navigate(['/adminJobs']);
  }

}
