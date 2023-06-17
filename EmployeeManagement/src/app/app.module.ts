import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from 'src/shared/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FallbackComponent } from './fallback/fallback.component';
import { EmployeeService } from 'src/shared/appservice';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AppHttpInterceptor } from 'src/shared/AppHttpInterceptors';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loadProductReducer } from './Employee/Employee.reducer';
import { EmployeeEffect } from './Employee/Employee.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loadEmployeesReduces$ } from './Store/Employees.reducer';
import { EmployeesEffect } from './Store/Employees.effects';
import { Router, RouterModule } from '@angular/router';
import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeRoutingModule } from './Employee/employee-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    EmployeeRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({loadEmployeesReduces$}),
    EffectsModule.forRoot([EmployeesEffect]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [EmployeeService,
  {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
