import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
