import { createReducer, on } from "@ngrx/store";
import { IEmployee } from "../Employee/IEmployee";
import * as EmployeeActions from './Employees.action' 


 const initialState : IEmployee[] =[{

    Id:"1",
    Name:"Rahul",
    EmployeeType:"Permanent",
    Gender:"Male"

},
{

    Id:"2",
    Name:"Rohit",
    EmployeeType:"temporary",
    Gender:"female"

}
]
export const loadEmployeesReduces$ = createReducer<IEmployee[]>(initialState,
    on(EmployeeActions.LoadEmployeeSuccess,(state,employees) =>{
       
        return {

            ...state,
            employees
        }
    })
    )