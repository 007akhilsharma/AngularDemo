import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, of, throwError } from "rxjs";
import { IEmployee } from "src/app/Employee/IEmployee";
//test
@Injectable()
export class EmployeeService{
    employees :IEmployee[] =
       [ {
            Id:"1",
            Name:"Amit",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"2",
            Name:"Sumit",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"3",
            Name:"Rohit",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"4",
            Name:"Rahul",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"5",
            Name:"Virat",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"6",
            Name:"Shewag",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"7",
            Name:"Sachin",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"8",
            Name:"Akshay",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"9",
            Name:"Prashant",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"10",
            Name:"John",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"11",
            Name:"Katie",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"12",
            Name:"Suraj",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"13",
            Name:"Shivam",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"14",
            Name:"Shunhman",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"15",
            Name:"Gill",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"16",
            Name:"Hardik",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"17",
            Name:"Yashasvi",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"19",
            Name:"Sumit",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"20",
            Name:"Vijay",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"21",
            Name:"Karan",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"22",
            Name:"Kunal",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"23",
            Name:"Shahid",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"24",
            Name:"Pankaj",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"25",
            Name:"Shrikant",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"26",
            Name:"Kashish",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"27",
            Name:"Kapil",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"28",
            Name:"Kishor",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"29",
            Name:"Gautam",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"30",
            Name:"Sachin",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"31",
            Name:"Prabhas",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"32",
            Name:"Viraj",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"33",
            Name:"Manoj",
            EmployeeType:"temporary",
            Gender:"Female"
        },
        {
            Id:"34",
            Name:"Abhishek",
            EmployeeType:"Permanent",
            Gender:"Male"
        },
        {
            Id:"35",
            Name:"Anubhav",
            EmployeeType:"temporary",
            Gender:"Female"
        }
            ]
    
    constructor(private http: HttpClient){}
       

    public getEmployees(){

        const headers = new HttpHeaders({

            'Content-Type':'application/json'
        });

        const url= '/employee/getEmployees';

        const request = new HttpRequest('GET',url, headers);

       return  this.http.request(request).pipe(
        map((employee)=>{
            of(this.employees)
        }),
        catchError((error: HttpErrorResponse)=>{
           return of(this.employees)
           // return  this.customThrowError(error);
        })
       )
    }
    customThrowError(error: HttpErrorResponse): any {
      return throwError(() => error );
    }
}