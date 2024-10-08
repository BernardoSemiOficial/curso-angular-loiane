import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() cursoId!: string;

  constructor(private authService: AuthService) {}

  handleClickLogout() {
    this.authService.logout();
  }
}
