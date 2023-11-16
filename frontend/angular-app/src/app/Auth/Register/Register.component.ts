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
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  onsubmit() {
    if (this.LoginForm.invalid) {
      console.log('Invalid login form');
    } else {
      console.log(this.LoginForm.value);
      this.authservice.RegisterService(this.LoginForm.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          // Handle non-HTTP errors here
          console.log(error);
          // ...
        }
      );
    }
  }
  LoginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    mail: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    Lei: new FormControl(''),
    company_name: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      // Define your form controls here
      username: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      Lei: ['', Validators.required],
      company_name: ['', Validators.required],
    });
  }
}
