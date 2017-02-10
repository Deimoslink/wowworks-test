import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public thereAreNotifications:boolean = true;

  constructor(private router: Router) {

  }

  logout(event) {
    event.preventDefault;
    localStorage.removeItem('user');
  }

  public authenticated() {
    return !!localStorage.getItem('user');
  };

  toggleNotifications(event){
    event.preventDefault();
    this.thereAreNotifications = !this.thereAreNotifications;
  }

}
