import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  divheight = 'inherit';
  ngOnInit(): void {}
  OpenNav() {
    console.log('clicked');
    this.divheight = '100px';
    console.log('clickedafter');
  }
}
