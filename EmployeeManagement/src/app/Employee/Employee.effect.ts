import { Injectable } from "@angular/core";
import { EmployeeService } from "src/shared/appservice";
import {Actions, createEffect, ofType } from '@ngrx/effects';
import  * as ProductActions from './Employee.createAction'
import { map, mergeMap, tap } from "rxjs";
import { IEmployee } from "./IEmployee";

@Injectable()
export class EmployeeEffect{
    
    constructor(private action$: Actions ,private EmployeeService: EmployeeService ){
        

    }

    loadProduct$ = createEffect(()=>{
        let employee : IEmployee ={

            Id:"1",
            Name:"Gajanan",
            EmployeeType:"Temporary",
            Gender:"female"
        
        }
       return this.action$.pipe(
            ofType(ProductActions.LoadEmployee),
           map((data)=>
            ProductActions.LoadEmployeeSuccess({ employee })
            )
            
    )})
}