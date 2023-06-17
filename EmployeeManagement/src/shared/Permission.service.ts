import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({

    providedIn:'root'
}
)
export class PermissionService{
constructor(){

}
public getPermissions() {

    return of(['createEmployee','editEmployee']);

}

}