import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentHeaderCompComponent } from './components/student-header-comp/student-header-comp.component';
import { StudentCard1CompComponent } from './components/student-card1-comp/student-card1-comp.component';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { StudentInstituteComponent } from './components/student-institute/student-institute.component';
import { StudentBlogComponent } from './components/student-blog/student-blog.component';
import { StudentBankLoanComponent } from './components/student-bank-loan/student-bank-loan.component';
import { StudentPartTimeJobsComponent } from './components/student-part-time-jobs/student-part-time-jobs.component';
import { StudentFooterCompComponent } from './components/student-footer-comp/student-footer-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentHeaderCompComponent,
    StudentCard1CompComponent,
    StudentHomeComponent,
    StudentCoursesComponent,
    StudentInstituteComponent,
    StudentBlogComponent,
    StudentBankLoanComponent,
    StudentPartTimeJobsComponent,
    StudentFooterCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
