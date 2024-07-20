import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './shared/models/user.model';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  cursoId!: string;
  user!: User | undefined;
  authServiceSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // if (!this.user) {
    //   this.router.navigate(['/login']);
    // }

    this.authServiceSubscription = this.authService.userLogged.subscribe(
      (loginUser) => {
        if (loginUser) this.user = loginUser;
        else this.user = undefined;
      }
    );
  }

  ngOnDestroy() {
    this.authServiceSubscription.unsubscribe();
  }
}
