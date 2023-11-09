import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [AuthComponent],
})
export class AuthModule {}
