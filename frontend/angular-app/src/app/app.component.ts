import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
export class AppComponent {
  title = 'angular-app';
  isVisible = false;
  ngOnInit(): void {}
  OpenNav() {
    this.isVisible = !this.isVisible;
  }
}
