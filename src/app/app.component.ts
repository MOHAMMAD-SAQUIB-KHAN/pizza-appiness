import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizza-appiness';
  currentUrl: string;

  constructor(public router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl = '/' + e.url.split('/')[1];
        console.log(this.currentUrl)
      }
    });
   }
}
