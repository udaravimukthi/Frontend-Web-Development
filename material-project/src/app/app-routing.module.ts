import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { Test2Component } from './test2/test2.component';
import { TestingComponent } from './testing/testing.component';


const routes: Routes = [
  {path: 'login' ,component: LoginComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'testing', component: TestingComponent },
  {path: 'test2', component: Test2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
