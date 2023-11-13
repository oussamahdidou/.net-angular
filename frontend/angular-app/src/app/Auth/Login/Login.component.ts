import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/AuthService.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  response: any;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthServiceService,
    private router: Router
  ) {}
  onsubmit() {
    if (this.LoginForm.invalid) {
      console.log('invalide loginform');
    } else {
      console.log(this.LoginForm.value);
      this.authservice.LoginService(this.LoginForm.value).subscribe(
        (result) => {
          if (result == null) {
            this.response = result;
            localStorage.setItem('token', this.response.jwtToken);
            this.router.navigate(['/home']);
          }
          window.location.href = '/dashboard';
        },
        (error) => {
          Swal.fire({
            title: 'Hello World!',
            text: 'This is a SweetAlert dialog',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          this.LoginForm.reset();
        }
      );
    }
  }
  LoginForm: FormGroup = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      // Define your form controls here
      Username: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
}
