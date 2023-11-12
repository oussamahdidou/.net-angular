import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/AuthService.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthServiceService
  ) {}
  onsubmit() {
    if (this.LoginForm.invalid) {
      console.log('invalide loginform');
    } else {
      console.log(this.LoginForm.value);
      this.authservice.LoginService(this.LoginForm.value);
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
