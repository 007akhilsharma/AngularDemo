import { createAction, props } from "@ngrx/store";
import { EmployeeAction } from "./Employee.action";
import { IEmployee } from "./IEmployee";

export const LoadEmployee = createAction(
    '[LOAD] Employee'
)

export const LoadEmployeeSuccess = createAction(
    EmployeeAction.LoadEmployeeSuccess,
    props<{employee: IEmployee}>()
)

export const LoadEmployeeFailure = createAction(
    EmployeeAction.LoadEmployeeSuccess,
    props<{employee: IEmployee}>()
)