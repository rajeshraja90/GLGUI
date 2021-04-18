import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { ProjectComponent } from './project/project.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule } from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import { Routes,RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { ProjectupdateComponent } from './projectupdate/projectupdate.component';
import { TaskupdateComponent } from './taskupdate/taskupdate.component';

const routes: Routes = [
  { path:'User', component:UserComponent },
  { path:'Project', component:ProjectComponent },
  { path:'Task', component:TaskComponent },
  { path:'UserDetails', component:UserdetailsComponent },
  { path:'ProjectDetails', component:ProjectdetailsComponent },
  { path:'TaskDetails', component:TaskdetailsComponent },
  { path:'UserUpdate', component:UserupdateComponent },
  { path:'ProjectUpdate', component:ProjectupdateComponent },
  { path:'TaskUpdate', component:TaskupdateComponent },
  { path:'Login', component:LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TaskComponent,
    ProjectComponent,
    LoginComponent,
    UserdetailsComponent,
    ProjectdetailsComponent,
    TaskdetailsComponent,
    UserupdateComponent,
    ProjectupdateComponent,
    TaskupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatSidenavModule,MatIconModule,MatButtonModule,MatFormFieldModule,
    MatInputModule,
     RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
