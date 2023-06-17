import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";


export class AppHttpInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

        const httpheaders = req.headers.append(
            'Authorization',
            `Bearer asjdhlahslhdlahldlkshdlkaldh`
        )

        const authreq= req.clone({headers:httpheaders});

        return next.handle(authreq).pipe(
       
            catchError((error :HttpErrorResponse)=>{
                  console.log("Intercetor error "+JSON.stringify(error));
              return  throwError(()=>  error);
            })
        )
    }
}