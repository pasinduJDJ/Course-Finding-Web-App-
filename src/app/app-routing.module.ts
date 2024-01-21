import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from './components/student-home/student-home.component';
import { StudentCoursesComponent } from './components/student-courses/student-courses.component';
import { StudentInstituteComponent } from './components/student-institute/student-institute.component';
import { StudentBlogComponent } from './components/student-blog/student-blog.component';
import { StudentBankLoanComponent } from './components/student-bank-loan/student-bank-loan.component';
import { StudentPartTimeJobsComponent } from './components/student-part-time-jobs/student-part-time-jobs.component';
import { StudentSelectCoursePath01Component } from './components/student-select-course-path01/student-select-course-path01.component';
import { StudentSelectCoursePath02Component } from './components/student-select-course-path02/student-select-course-path02.component';
import { StudentSelectCoursePath03Component } from './components/student-select-course-path03/student-select-course-path03.component';
import { StudentSelectCoursePath04Component } from './components/student-select-course-path04/student-select-course-path04.component';
import { FullCourseDetailesComponent } from './components/full-course-detailes/full-course-detailes.component';
import { FullInstituteDetailesComponent } from './components/full-institute-detailes/full-institute-detailes.component';
import { FullBankDetailesComponent } from './components/full-bank-detailes/full-bank-detailes.component';
import { FullBlogDetailsComponent } from './components/full-blog-details/full-blog-details.component';
import { FullJobDetailsComponent } from './components/full-job-details/full-job-details.component';
import { LoginComponent } from './components/login/login.component';
import { InstituteAdminHomeComponent } from './components/institute-admin-home/institute-admin-home.component';
import { InstituteAdminCoursesComponent } from './components/institute-admin-courses/institute-admin-courses.component';
import { InstituteAdminEditProfileComponent } from './components/institute-admin-edit-profile/institute-admin-edit-profile.component';
import { InstituteAdminAddCourseComponent } from './components/institute-admin-add-course/institute-admin-add-course.component';
import { AdminHomePageComponent } from './components/admin-home-page/admin-home-page.component';
import { AdminUsersPageComponent } from './components/admin-users-page/admin-users-page.component';
import { AdminCoursesPageComponent } from './components/admin-courses-page/admin-courses-page.component';
import { AdminBlogsPageComponent } from './components/admin-blogs-page/admin-blogs-page.component';
import { AdminBankLoansPageComponent } from './components/admin-bank-loans-page/admin-bank-loans-page.component';
import { AdminParTimeJobsPageComponent } from './components/admin-par-time-jobs-page/admin-par-time-jobs-page.component';
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
import { AdminBlogEditBlogComponent } from './components/admin-blog-edit-blog/admin-blog-edit-blog.component';
import { AdminJobsEditJobComponent } from './components/admin-jobs-edit-job/admin-jobs-edit-job.component';
import { AdminBankEditBannkComponent } from './components/admin-bank-edit-bannk/admin-bank-edit-bannk.component';
import { AdminUsersViewUserComponent } from './components/admin-users-view-user/admin-users-view-user.component';
import { InstituteAdminCourseManageComponent } from './components/institute-admin-course-manage/institute-admin-course-manage.component';
import { InstituteAdminCourseEditComponent } from './components/institute-admin-course-edit/institute-admin-course-edit.component';

const routes: Routes = [

  // Student User
  { path: '', component: StudentHomeComponent },
  { path: 'home', component: StudentHomeComponent },
  { path: 'courses', component: StudentCoursesComponent },
  { path: 'institute', component: StudentInstituteComponent },
  { path: 'blogs', component: StudentBlogComponent },
  { path: 'bankloan', component: StudentBankLoanComponent },
  { path: 'jobs', component: StudentPartTimeJobsComponent },
  { path: 'selectPath1', component: StudentSelectCoursePath01Component },
  { path: 'selectPath2', component: StudentSelectCoursePath02Component },
  { path: 'selectPath3', component: StudentSelectCoursePath03Component },
  { path: 'selectPath4', component: StudentSelectCoursePath04Component },
  { path: 'student/:id/fullCourse', component: FullCourseDetailesComponent },
  { path: 'student/:id/fullInstitute', component: FullInstituteDetailesComponent },
  { path: 'student/:id/fullLoan', component: FullBankDetailesComponent },
  { path: 'student/:id/fullBlog', component: FullBlogDetailsComponent },
  { path: 'student/:id/fullJob', component: FullJobDetailsComponent },
  { path: 'login', component: LoginComponent },

  // Institute Admin User
  { path: 'instituteHome', component: InstituteAdminHomeComponent },
  { path: 'instituteCourses', component: InstituteAdminCoursesComponent },
  { path: 'instituteAdmin/:id/manageCourse', component: InstituteAdminCourseManageComponent },
  { path: 'instituteAdmin/:id/editCourse', component: InstituteAdminCourseEditComponent },
  { path: 'instituteEditHome', component: InstituteAdminEditProfileComponent },
  { path: 'AddCourse', component: InstituteAdminAddCourseComponent },

  // Admin User
  { path: 'adminHome', component: AdminHomePageComponent},
  { path: 'adminUsers', component: AdminUsersPageComponent},
  { path: 'adminCourses', component: AdminCoursesPageComponent},
  { path: 'adminBlogs', component: AdminBlogsPageComponent},
  { path: 'adminBankLoans', component:AdminBankLoansPageComponent},
  { path: 'adminJobs', component: AdminParTimeJobsPageComponent},
  { path: 'adminAllCourses', component: AdminCoursesAllCoursesComponent},
  { path: 'addUsers', component: AdminUsersAddUsersComponent},
  { path: 'addBankLoans', component: AdminBankAddBankLoanComponent},
  { path: 'addJobs', component: AdminJobsAddJobsComponent},
  { path: 'addBlogs', component: AdminBlogAddBlogsComponent},
  { path: 'adminAddCourse', component: AdminCoursesAddcoursesComponent},

  { path: 'manageUsers', component: AdminUsersManageUsersComponent},
  { path: 'mangeCourses', component: AdminCoursesMangeCoursesComponent},
  { path: 'admin/:id/manageBanks', component: AdminBankManageBnakLoansComponent},
  { path: 'admin/:id/institute', component: AdminUsersViewUserComponent},
  { path: 'admin/:id/manageBlogs', component: AdminBlogMangeBlogsComponent},
  { path: 'admin/:id/manageJobs', component:AdminJobMangeJobsComponent},

  { path: 'admin/:id/editBlogs', component: AdminBlogEditBlogComponent},
  { path: 'admin/:id/editJobs', component: AdminJobsEditJobComponent},
  { path: 'admin/:id/editBanks', component: AdminBankEditBannkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
