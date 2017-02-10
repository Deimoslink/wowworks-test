import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { UserService } from "./service/user.service";

@Injectable()

export class LoggedInGuard implements CanActivate {

  constructor(private user: UserService) {

  }

  canActivate() {
    return this.user.authenticated();
  }
}
