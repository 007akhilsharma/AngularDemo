import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/shared/appservice';
import * as ProductActions from './Employee/Employee.createAction';
import { Store } from '@ngrx/store';
import { selectEmployee } from './Employee/Employee.selector';
import { map } from 'rxjs';
import * as EmployeeActions from './Store/Employees.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'EmployeeManagement';

  constructor(private router : Router,
    private employeeService : EmployeeService,
    private store : Store<any>){
     
 this.employeeService.getEmployees().subscribe();
  }
  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.LoadEmployee());
    
  }

  public NavigateToAddEmployees(){
    this.router.navigateByUrl('/Employee');
  }

  public NavigateToAddEmployeesList(){
    this.router.navigateByUrl('/Employee/EmployeeList');
  }
}
