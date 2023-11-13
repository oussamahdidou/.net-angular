import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccessDeniedComponent } from './AccessDenied/AccessDenied.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'AccessDenied', component: AccessDeniedComponent },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    AccessDeniedComponent,
  ],
})
export class AuthModule {}
