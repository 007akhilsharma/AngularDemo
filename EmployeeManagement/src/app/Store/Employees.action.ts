import { createAction, props } from "@ngrx/store";
import { IEmployee } from "../Employee/IEmployee";

 enum EmployeeActions {

    LoadEmployees ="[LOAD] EMPLOYEES",
    LoadEmployeeSuccess = "[LOAD] EMPLOYEES SUCCESS",
    LoadEmployeeFailure = "[LOAD] EMPLOEYEES FAILURE"
}

export const LoadEmployee = createAction(EmployeeActions.LoadEmployees);

export const LoadEmployeeSuccess = createAction(EmployeeActions.LoadEmployeeSuccess, props<{employees: IEmployee[]}>());

export const LoadEmployeefailure = createAction(EmployeeActions.LoadEmployeeFailure);
