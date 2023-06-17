import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomPreLoadingStrategy } from 'src/shared/custom-preloadingstrategy';
import { FallbackComponent } from './fallback/fallback.component';
import { AuthGuard } from 'src/shared/Auth-guard';
import { EmployeeRoutingModule } from './Employee/employee-routing.module';

const routes: Routes = [
   { path: 'Employee', canActivate:[AuthGuard],data: {preload: true, requiredPermission : true},loadChildren: () => import('./Employee/employee.module').then(m => m.EmployeeModule) }
   ,{ path: 'EmployeeList', canActivate:[AuthGuard],data: {preload: true, requiredPermission : true},loadChildren: () => import('./Employee/employee.module').then(m => m.EmployeeModule) }
  ,{path:'Home', component: AppComponent}
  ,{path:'fallbackPage', component: FallbackComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreLoadingStrategy}),EmployeeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
