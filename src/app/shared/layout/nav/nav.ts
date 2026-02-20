import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {

  constructor(private readonly _authService: AuthService, private readonly _router: Router) { }

  onLogout() {
    if (this._authService.isAuthenticated()) {
      this._authService.logout();
      this._router.navigate(['/auth/login']);
    }
  }
}
