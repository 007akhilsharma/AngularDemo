import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder,FormControl,FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from './save-dialog/save-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveSnackBarComponent } from './save-snack-bar/save-snack-bar.component';
import { Store } from '@ngrx/store';
import { IEmployee } from './IEmployee';
import { selectEmployee } from './Employee.selector';
import { map } from 'rxjs';
import * as EmployeesSelectors from './Employee.selector'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent  implements OnInit{

  public formGroup: any;
  public employeeTypes: any[] | undefined;
  validationMessages: any;
  errorMessages: any;
  pageTitle ="Add Employees";
  isEnabled = false;
  employees: any;
  constructor(private formBuilder : FormBuilder,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private store : Store<IEmployee[]>
    ){

  }
  ngOnInit(): void {
   

    // let employee = this.store.select(selectEmployee).pipe(
    //   map((employeeDetail : any) => {
    //     console.log("selector called  map "+ JSON.stringify(employeeDetail));
    //     return employeeDetail;
           
    //   })
    // ).subscribe((data)=>{
    //   console.log("selector called subscrive  "+JSON.stringify(data));
    // })

    this.store.select(EmployeesSelectors.selectEmployee).subscribe((employees)=>{
   this.employees = employees; 

    })

    this.employeeTypes = [
      {value: '1', text: 'Permanent'},
      {value: '2', text: 'Temporary'}
    ];

   this.formGroup = this.formBuilder.group({
      fullName : ['',[Validators.required]],
      email :['',[Validators.email,EmployeeComponent.domain("@gmail.com")]],
      employeeType:[''],
      confirm:[''],
      comment:['',[Validators.minLength(10), Validators.maxLength(100)]],
      gender:['']
    })

    this.intializeValidationMessages()
    this.triggerValidation();
  }
  intializeValidationMessages() {
    this.validationMessages ={
    "fullName":{
      "required" :"Full name is required."
    },
    "comment":{

      "minlength" : "Comment should contain minimum 5 characters.",
      "maxlength":"Comment should not be more than 100 charcaters."
    },
    "email" :{
      "email" : "Invalid email.",
      "domain":"Domain should be @gmail.com."
    }

    }

    this.errorMessages = {
      "fullName" :"",
      "comment":"",
      "email":""
    }


  }

  triggerValidation(){
  this.formGroup.valueChanges.subscribe((data:any)=>{


    this.logValidationErrors(this.formGroup);
   
  })
}
  logValidationErrors(group: any) {
    Object.keys(group.controls).forEach((key:any)=>{
      const abtractControl = group.get(key);
      this.errorMessages[key] = "";
      if(abtractControl instanceof FormControl )
      {
       
        if(abtractControl  && !abtractControl.valid)
        {
          
          for(let error in abtractControl.errors){
                
            this.errorMessages[key] += this.validationMessages[key][error] + " ";
          }
        }
      }
  
     })
  
  }

  public onSubmit(){
    const dialog = this.dialog.open(SaveDialogComponent);
    dialog.afterClosed().subscribe(()=>{
      this.snackBar.open("Changes saved succesfully",'Success',{
        duration:1000
      });
    })
    console.log("Form submitted successfully !");
  }
  static domain(domainName : string ): ValidatorFn{
   
    return (control : AbstractControl ): {[Key:string]:any} | null =>
     {
      if(control.value.includes(domainName)){

        return null;
      }
      else{
        return {"domain":true}
      }
    }


  }

   

}
