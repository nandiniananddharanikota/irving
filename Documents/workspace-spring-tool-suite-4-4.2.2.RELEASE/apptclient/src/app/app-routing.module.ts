import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateapptComponent } from './createappt/createappt.component';
import { AppointmentsComponent } from './appointments/appointments.component';

const routes: Routes = [
  {path: '',  component: AppointmentsComponent},
  {path: 'appointments',  component: AppointmentsComponent},
  {path: 'createappt',  component: CreateapptComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
