import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEmployee } from "./IEmployee";

export const employeefeatureSelector = createFeatureSelector<IEmployee>('loadProductReducer');

export const selectEmployee = createSelector(
    employeefeatureSelector,
    (employee)=>{
    return {
       Id: employee.Id,
       Name : employee.Name,
       EmployeeType: employee.EmployeeType,
       Gender:  employee.Gender
    }
}

)