import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PlanComponent } from './plan/plan.component';
import { AddComponent } from './add/add.component';
import { SummaryComponent } from './summary/summary.component';
import { ThankComponent } from './thank/thank.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:'info', component: InfoComponent, canActivate: []},
  {path:'plan', component: PlanComponent, canActivate: []},
  {path:'add', component: AddComponent, canActivate: []},
  {path:'summary', component: SummaryComponent, canActivate: []},
  {path:'thank', component: ThankComponent, canActivate: []},
  {path:'', component: InfoComponent, canActivate: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
