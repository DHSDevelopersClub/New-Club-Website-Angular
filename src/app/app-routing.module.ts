import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from './roster/roster.component';

const routes: Routes = [
  {
    path: '',
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
