import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private dataservice : DataService, private router : Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("In")
      if (this.dataservice.getToken()) {
        console.log("creds matched!")
        // this.router.navigate(['home']) 
        return true
      } else{
        alert("You need to login first!")
        this.router.navigate(['']) 
        return false
      }
  }
  
}
