import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/shared/angular-material/angular-material.module';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { SaveSnackBarComponent } from './save-snack-bar/save-snack-bar.component';
import { ConcatPipe } from 'src/shared/concatPipe';
import { HighlightDirective } from 'src/shared/highlightDirective';
import { ConditionDirective } from 'src/shared/ConditionalDirective';
import { StoreModule } from '@ngrx/store';
import { loadProductReducer} from  './Employee.reducer'
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffect } from './Employee.effect';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    EmployeeComponent,
    SaveDialogComponent,
    SaveSnackBarComponent,
    ConcatPipe,
    HighlightDirective,
    ConditionDirective,
    EmployeeListComponent
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FormsModule,
    FlexLayoutModule,
    FlexModule,
    AgGridModule
    // StoreModule.forRoot(loadProductReducer),
    // EffectsModule.forRoot(EmployeeEffect)
  ],
  providers:[
    
  ]
})
export class EmployeeModule { }
