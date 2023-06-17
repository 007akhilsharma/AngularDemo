import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEmployee } from "../Employee/IEmployee";

export const employeesFeatureSelector = createFeatureSelector<IEmployee[]>('employees');

export const employeesSelector =  createSelector(
    employeesFeatureSelector,
    employees => employees
)