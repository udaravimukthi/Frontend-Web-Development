import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'profile', component: ProfileComponent},
  { path : 'about_us', component: AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
