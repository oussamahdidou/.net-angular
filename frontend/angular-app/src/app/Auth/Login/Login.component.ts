import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  onsubmit() {
    if (this.LoginForm.invalid) {
      console.log('invalide loginform');
    } else {
      console.log(this.LoginForm.value);
    }
  }
  LoginForm: FormGroup = new FormGroup({
    Username: new FormControl(''),
    Password: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      // Define your form controls here
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
