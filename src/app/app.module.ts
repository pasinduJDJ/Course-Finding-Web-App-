import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


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
import { StudentCard2CompComponent } from './components/student-card2-comp/student-card2-comp.component';
import { StudentBtn2CompComponent } from './components/student-btn2-comp/student-btn2-comp.component';
import { StudentBtn1CompComponent } from './components/student-btn1-comp/student-btn1-comp.component';
import { StudentInstituteGridCompComponent } from './components/student-institute-grid-comp/student-institute-grid-comp.component';
import { StudentSelectCoursePath01Component } from './components/student-select-course-path01/student-select-course-path01.component';
import { StudentSelectCoursePath02Component } from './components/student-select-course-path02/student-select-course-path02.component';
import { StudentSelectCoursePath03Component } from './components/student-select-course-path03/student-select-course-path03.component';
import { StudentSelectCoursePath04Component } from './components/student-select-course-path04/student-select-course-path04.component';
import { StudentTitleWithContentComponent } from './components/title-with-content/student-title-with-content.component';
import { FullInstituteDetailesComponent } from './components/full-institute-detailes/full-institute-detailes.component';
import { FullCourseDetailesComponent } from './components/full-course-detailes/full-course-detailes.component';
import { FullBankDetailesComponent } from './components/full-bank-detailes/full-bank-detailes.component';
import { FullJobDetailsComponent } from './components/full-job-details/full-job-details.component';
import { FullBlogDetailsComponent } from './components/full-blog-details/full-blog-details.component';
import { LoginComponent } from './components/login/login.component';
import { InstituteAdminHomeComponent } from './components/institute-admin-home/institute-admin-home.component';
import { TitleWithContentBtnComponent } from './components/title-with-content-btn/title-with-content-btn.component';
import { InstituteAdminCoursesComponent } from './components/institute-admin-courses/institute-admin-courses.component';
import { InstituteAdminEditProfileComponent } from './components/institute-admin-edit-profile/institute-admin-edit-profile.component';
import { InstituteAdminAddCourseComponent } from './components/institute-admin-add-course/institute-admin-add-course.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminUsersPageComponent } from './components/admin-users-page/admin-users-page.component';
import { AdminCoursesPageComponent } from './components/admin-courses-page/admin-courses-page.component';
import { AdminBlogsPageComponent } from './components/admin-blogs-page/admin-blogs-page.component';
import { AdminBankLoansPageComponent } from './components/admin-bank-loans-page/admin-bank-loans-page.component';
import { AdminParTimeJobsPageComponent } from './components/admin-par-time-jobs-page/admin-par-time-jobs-page.component';
import { AdminBtn1CompComponent } from './components/admin-btn1-comp/admin-btn1-comp.component';
import { AdminCard1CompComponent } from './components/admin-card1-comp/admin-card1-comp.component';
import { AdminCard2CompComponent } from './components/admin-card2-comp/admin-card2-comp.component';
import { AdminCoursesAllCoursesComponent } from './components/admin-courses-all-courses/admin-courses-all-courses.component';
import { AdminUsersAddUsersComponent } from './components/admin-users-add-users/admin-users-add-users.component';
import { AdminBankAddBankLoanComponent } from './components/admin-bank-add-bank-loan/admin-bank-add-bank-loan.component';
import { AdminJobsAddJobsComponent } from './components/admin-jobs-add-jobs/admin-jobs-add-jobs.component';
import { AdminCoursesAddcoursesComponent } from './components/admin-courses-addcourses/admin-courses-addcourses.component';
import { AdminBlogAddBlogsComponent } from './components/admin-blog-add-blogs/admin-blog-add-blogs.component';
import { AdminUsersManageUsersComponent } from './components/admin-users-manage-users/admin-users-manage-users.component';
import { AdminCoursesMangeCoursesComponent } from './components/admin-courses-mange-courses/admin-courses-mange-courses.component';
import { AdminBankManageBnakLoansComponent } from './components/admin-bank-manage-bnak-loans/admin-bank-manage-bnak-loans.component';
import { AdminBlogMangeBlogsComponent } from './components/admin-blog-mange-blogs/admin-blog-mange-blogs.component';
import { AdminJobMangeJobsComponent } from './components/admin-job-mange-jobs/admin-job-mange-jobs.component';
import { ReauestedComponentsComponent } from './components/reauested-components/reauested-components.component';
import { CourseCardComponent } from './components/card-course/course-card.component';
import { BlogCardComponent } from './components/card-blog/blog-card.component';
import { AdminBlogEditBlogComponent } from './components/admin-blog-edit-blog/admin-blog-edit-blog.component';
import { JobCardComponent } from './components/card-job/job-card.component';
import { AdminJobsEditJobComponent } from './components/admin-jobs-edit-job/admin-jobs-edit-job.component';
import { CardBankComponent } from './components/card-bank/card-bank.component';
import { AdminBankEditBannkComponent } from './components/admin-bank-edit-bannk/admin-bank-edit-bannk.component';
import { AdminUsersViewUserComponent } from './components/admin-users-view-user/admin-users-view-user.component';
import { CardInstituteComponent } from './components/card-institute/card-institute.component';
import { InstituteAdminCourseManageComponent } from './components/institute-admin-course-manage/institute-admin-course-manage.component';
import { InstituteAdminCourseEditComponent } from './components/institute-admin-course-edit/institute-admin-course-edit.component';

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
    StudentFooterCompComponent,
    StudentCard2CompComponent,
    StudentBtn2CompComponent,
    StudentBtn1CompComponent,
    StudentInstituteGridCompComponent,
    StudentSelectCoursePath01Component,
    StudentSelectCoursePath02Component,
    StudentSelectCoursePath03Component,
    StudentSelectCoursePath04Component,
    StudentTitleWithContentComponent,
    FullInstituteDetailesComponent,
    FullCourseDetailesComponent,
    FullBankDetailesComponent,
    FullJobDetailsComponent,
    FullBlogDetailsComponent,
    LoginComponent,
    InstituteAdminHomeComponent,
    TitleWithContentBtnComponent,
    InstituteAdminCoursesComponent,
    InstituteAdminEditProfileComponent,
    InstituteAdminAddCourseComponent,
    AdminHomePageComponent,
    AdminUsersPageComponent,
    AdminCoursesPageComponent,
    AdminBlogsPageComponent,
    AdminBankLoansPageComponent,
    AdminParTimeJobsPageComponent,
    AdminBtn1CompComponent,
    AdminCard1CompComponent,
    AdminCard2CompComponent,
    AdminCoursesAllCoursesComponent,
    AdminUsersAddUsersComponent,
    AdminBankAddBankLoanComponent,
    AdminJobsAddJobsComponent,
    AdminCoursesAddcoursesComponent,
    AdminBlogAddBlogsComponent,
    AdminUsersManageUsersComponent,
    AdminCoursesMangeCoursesComponent,
    AdminBankManageBnakLoansComponent,
    AdminBlogMangeBlogsComponent,
    AdminJobMangeJobsComponent,
    ReauestedComponentsComponent,
    CourseCardComponent,
    BlogCardComponent,
    AdminBlogEditBlogComponent,
    JobCardComponent,
    AdminJobsEditJobComponent,
    CardBankComponent,
    AdminBankEditBannkComponent,
    AdminUsersViewUserComponent,
    CardInstituteComponent,
    InstituteAdminCourseManageComponent,
    InstituteAdminCourseEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
