import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeShowAllComponent } from './employee-show-all/employee-show-all.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { PendingLeavesComponent } from './pending-leaves/pending-leaves.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { LeaveShowAllComponent } from './leave-show-all/leave-show-all.component';
import { FilterdataPipe } from './filterdata.pipe';

const appRoutes : Routes = [
 
  {path : 'Login', component:LoginComponent},
  {path : 'Dashboard', component:DashboardComponent},
  {path : 'ApplyLeave', component:ApplyLeaveComponent},
  {path : 'ApproveDeny', component:ApproveDenyComponent},
  {path : '', component:EmployeeShowAllComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmployeeShowAllComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    ManagerDetailsComponent,
    LeaveHistoryComponent,
    ApplyLeaveComponent,
    LeaveApplicationComponent,
    PendingLeavesComponent,
    ApproveDenyComponent,
    LeaveShowAllComponent,
    FilterdataPipe
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
