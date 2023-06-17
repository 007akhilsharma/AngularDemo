import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EmployeeService } from "src/shared/appservice";
import * as EmployeeActions from './Employees.action';
import { map, mergeMap } from "rxjs";
import { IEmployee } from "../Employee/IEmployee";

@Injectable()

export class EmployeesEffect{

        constructor(private action$: Actions , private employeeService : EmployeeService){

        }

         loadEmployeesEffects$ = createEffect(()=>{

            return this.action$.pipe(
                ofType(EmployeeActions.LoadEmployee),
                mergeMap(() => this.employeeService.getEmployees().pipe(
                    map((employees)=>{

                      return   EmployeeActions.LoadEmployeeSuccess({employees:<IEmployee[]>employees})
                    })
                ))
            )
         }
       
        )

}