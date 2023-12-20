import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcelonaComponent } from './barcelona/barcelona.component';
import { MadridComponent } from './madrid/madrid.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Barcelona', component:BarcelonaComponent }, 
  { path: 'Madrid', component:MadridComponent }, 
  { path: 'Home', component:HomeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
