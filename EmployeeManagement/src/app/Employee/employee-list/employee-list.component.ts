import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/shared/appservice';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit{
  columns: any;
  coldef: any[] =[];
  rowData: any;
  defaultColDef: any;
   
  constructor(
    private employeeService :EmployeeService
  ){
    this.employeeService.getEmployees().subscribe((data)=>{
      this.rowData = data;
    })
  }
  ngOnInit(): void {
    this.setColumns();
    
  }
  setColumns() {
    this.columns = {
      
      EmployeeId :{
        headerName :"Id",
        field:"Id",
        sortable:true,
        filter:'agTextColumnFilter'

      },
      EmployeeName :{
        headerName :"Employee Name",
        field:"Name",
        sortable:true,
        filter:'agTextColumnFilter'

      },
      EmployeeType :{
        headerName :"Employee Type",
        field:"EmployeeType",
        sortable:true,
        filter:'agTextColumnFilter'


      },EmployeeGender :{
        headerName :"Employee Gender",
        field:"Gender",
        sortable:true,
        filter:'agTextColumnFilter'

      }
    }

    this.coldef = [
      this.columns.EmployeeId,
      this.columns.EmployeeName,
      this.columns.EmployeeType,
      this.columns.EmployeeGender,
    ]

    this.defaultColDef = {
      sortable: true,
      paginationPageSize:15
    };
  }

   
}
