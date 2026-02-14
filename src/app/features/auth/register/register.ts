import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthFormConfig, REGISTER_CONFIG } from '../auth.config';
import { AppApiError } from '../../../core/models/app-api-error.model';
import { UsuarioService } from '../../../core/services/usuario.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  config: AuthFormConfig = REGISTER_CONFIG;
  loading = false;
  errorMessage = '';

  constructor(private readonly _usuarioService: UsuarioService,
    private readonly _cdr: ChangeDetectorRef) { }

  onSubmit(formValue: any) {
    this.loading = true;
    this.errorMessage = '';
    const {confirmPassword, ...credentials} = formValue;
    this._usuarioService.register(credentials).subscribe({
      next: () => {
        this.loading = false;
        this._cdr.markForCheck()
      },
      error: (err: AppApiError) => {
        this.errorMessage = `Error ${err.status} - ${err.message}`;
        this.loading = false;
        this._cdr.markForCheck()
      },
    });
  }
}
