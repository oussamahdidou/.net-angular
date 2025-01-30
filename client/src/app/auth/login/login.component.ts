import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  returnUrl: string = '/'; // Default URL if returnUrl is not provided
  form: FormGroup;
  constructor(
    private toast: HotToastService,
    private route: ActivatedRoute,
    private router: Router,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'] || this.returnUrl;
  }

  login() {
    console.log('Login form value:', this.form.value);
    const toastRef = this.toast.loading('Processing your request...');

    this.authService
      .login(this.form.value.username, this.form.value.password)
      .subscribe(
        (response) => {
          toastRef.close();
          this.toast.success(`Operation completed successfully!`);
          console.log('Login response: ', response.username);
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          console.log('Login error: ', error.error);

          toastRef.close();
          this.toast.error(error.error);
        }
      );
  }
}
