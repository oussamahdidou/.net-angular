import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../Services/AuthService.service';

@Injectable({
  providedIn: 'root',
})
export class OperateurGuard implements CanActivate {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.IsOperator()) {
      // User is authorized, allow access to the route
      return true;
    } else {
      // User is not authorized, redirect to login page
      this.router.navigate(['/Auth/AccessDenied'], {
        skipLocationChange: true,
      });
      return false;
    }
  }
}
