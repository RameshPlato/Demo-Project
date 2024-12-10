import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable,Injector } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return next.handle(request).pipe(tap(() => { },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if ((err.status === 401) || (err.status === 403)) {
                localStorage.clear();
                this.router.navigate(['/login']);
            } else {
              return;
            }
          }
        }));
    }

    // constructor(private userService : UserService,private router : Router){}

    // intercept(req: HttpRequest<any>, next: HttpHandler) {

    //     if (req.headers.get('noauth'))
    //         return next.handle(req.clone());
    //     else {
    //         const clonedreq = req.clone({
    //             headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
    //         });
    //         return next.handle(clonedreq).pipe(
    //             tap(
    //                 event => { },
    //                 err => {
    //                     if (err.error.auth == false) {
    //                         this.router.navigateByUrl('/login');
    //                     }
    //                 })
    //         );
    //     }
    // }
}