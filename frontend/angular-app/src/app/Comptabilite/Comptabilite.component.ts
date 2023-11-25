import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../Services/AuthService.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AccountingService } from '../Services/Accounting.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-Comptabilite',
  templateUrl: './Comptabilite.component.html',
  styleUrls: ['./Comptabilite.component.css'],
})
export class ComptabiliteComponent implements OnInit {
  response: any;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AccountingService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authservice.AllOperations().subscribe(
      (response) => {
        console.log(response); // Log the raw response
        if (response instanceof HttpResponse) {
          if (response.status === 200) {
            const token = response.body; // Directly access the body as text
            console.log(token);
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
