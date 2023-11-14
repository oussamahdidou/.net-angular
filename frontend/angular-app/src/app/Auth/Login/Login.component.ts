import { HttpResponse } from '@angular/common/http';
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
      console.log('Invalid login form');
    } else {
      console.log(this.LoginForm.value);
      this.authservice.loginService(this.LoginForm.value).subscribe(
        (response) => {
          console.log(response); // Log the raw response
          if (response instanceof HttpResponse) {
            if (response.status === 200) {
              const token = response.body; // Directly access the body as text
              console.log(token);
              localStorage.setItem('jwt', token);
              this.router.navigate(['/']);
            }
          } else {
            // Handle HTTP errors here
            console.log(response.status);
            console.log(response.error); // Log the error response body
            Swal.fire({
              title: 'Login Failed',
              text: response.error || 'Please check your credentials',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
            this.LoginForm.reset();
          }
        },
        (error) => {
          // Handle non-HTTP errors here
          console.error(error);
          // ...
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
