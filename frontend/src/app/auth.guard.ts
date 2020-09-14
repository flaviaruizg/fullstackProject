import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    let status = false;
    sessionStorage.getItem("JWT") ? (status = true) : (status = false);
    return status;
  }
}
