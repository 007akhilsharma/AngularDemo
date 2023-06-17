import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable, catchError, map, of } from "rxjs"
import { PermissionService } from "./Permission.service"

export const AuthGuard : CanActivateFn = (route : ActivatedRouteSnapshot, state : RouterStateSnapshot) =>
{
    const permissionService =  inject(PermissionService);
    const router = inject(Router);

    return permissionService.getPermissions().pipe(
        map((data)=>{
            if(data.includes("createEmployee"))
            {
         return true;
            }else{
                console.log("no permissions to create emplouyee");
                router.navigate(['/fallbackPage'])
                return false;
            }
        })
       
    )

 

}