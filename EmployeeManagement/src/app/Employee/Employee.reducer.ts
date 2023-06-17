import { createReducer,on } from "@ngrx/store";
import { IEmployee } from "./IEmployee";
import * as ProductActions from './Employee.createAction';
export const initialState : IEmployee ={

    Id:"1",
    Name:"Amit",
    EmployeeType:"Permanent",
    Gender:"Male"

}
export const  loadProductReducer = createReducer<IEmployee>(
    initialState, on(
        ProductActions.LoadEmployeeSuccess,(state,action) => {
            return {
                ...state,
                Id : action.employee.Id,
                Name : action.employee.Name,
                EmployeeType : action.employee.EmployeeType,
                Gender : action.employee.Gender

            }
        }
    )
)