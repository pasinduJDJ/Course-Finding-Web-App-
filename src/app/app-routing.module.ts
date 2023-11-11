import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { StudentInstituteComponent } from './components/student-institute/student-institute.component';
import { StudentBlogComponent } from './components/student-blog/student-blog.component';
import { StudentBankLoanComponent } from './components/student-bank-loan/student-bank-loan.component';
import { StudentPartTimeJobsComponent } from './components/student-part-time-jobs/student-part-time-jobs.component';

const routes: Routes = [
  {path: '', component:StudentHomeComponent},
  {path: 'home', component:StudentHomeComponent},
  {path: 'courses', component:StudentCoursesComponent},
  {path: 'institute', component:StudentInstituteComponent},
  {path: 'blogs', component:StudentBlogComponent},
  {path: 'bankloan', component:StudentBankLoanComponent},
  {path: 'jobs', component:StudentPartTimeJobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
