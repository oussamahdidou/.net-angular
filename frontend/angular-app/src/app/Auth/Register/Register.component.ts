import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  onsubmit() {
    if (this.LoginForm.invalid) {
      console.log('invalide loginform');
    } else {
      console.log(this.LoginForm.value);
    }
  }
  LoginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    mail: new FormControl(''),
    confirmpassword: new FormControl(''),
    agree: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      // Define your form controls here
      username: ['', Validators.required],
      password: ['', Validators.required],
      mail: ['', Validators.required],
      confirmpassword: ['', Validators.required],
      agree: ['', Validators.requiredTrue],
    });
  }
}
