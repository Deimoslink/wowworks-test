import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any = {};

  formSubmit() {
    if (this.data.username === 'admin' && this.data.password === 'admin') {
      console.log('Welcome!');
      localStorage.setItem('user', this.data.username);
    } else {
      console.log('Go away!');
    }
  }

  logout() {
    localStorage.removeItem('user');
  }

  public authenticated() {
    return !!localStorage.getItem('user');
  };

  constructor() { }

  ngOnInit() {
  }

}
