import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  printLocalStorage() {
    console.dir(localStorage);
  }

  public authenticated() {
    return !!localStorage.getItem('user');
  };

}
