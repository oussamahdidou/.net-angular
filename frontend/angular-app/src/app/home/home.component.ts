import { Component } from '@angular/core';
import { AuthServiceService } from '../Services/AuthService.service';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('true', style({ width: '*' })),
      state('false', style({ display: 'none', height: '0px' })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('300ms ease-in')),
    ]),
    trigger('Rotate-button', [
      state('true', style({ transform: 'rotate(0)' })),
      state('false', style({ transform: 'rotate(180deg)' })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('300ms ease-in')),
    ]),
  ],
})
export class HomeComponent {
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}
  isVisible = false;
  ngOnInit(): void {}
  OpenNav() {
    this.isVisible = !this.isVisible;
  }
}
