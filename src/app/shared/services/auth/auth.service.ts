import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogged } from '../../models/user-logged.model';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  isLogged: boolean = false;
  userLogged = new EventEmitter<UserLogged>(undefined);
  user!: User;

  constructor(private router: Router) {}

  ngOnInit() {}

  login(user: User) {
    if (user.email === 'usuario@email.com' && user.password === '123456') {
      this.isLogged = true;
      this.userLogged.emit(user);
      this.router.navigate(['/']);
      return;
    }

    this.logout();
  }

  logout() {
    this.isLogged = false;
    this.userLogged.emit(undefined);
    this.router.navigate(['/login']);
  }

  isUserLogged() {
    return this.isLogged;
  }
}
