import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OderDetailsComponent } from './oder-details/oder-details.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path: '', redirectTo:'/dashboard',pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'order',component:OrderComponent},
  {path:'order-details',component:OderDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
