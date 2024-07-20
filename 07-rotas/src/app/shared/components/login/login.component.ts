import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user: User = { email: 'usuario@email.com', password: '123456' };

  constructor(private authService: AuthService) {}

  handleClickLogin() {
    this.authService.login(this.user);
  }
}
