import { NgModule } from '@angular/core';

import { Auth } from './auth/auth';
import { Login } from './login/login';
import { Register } from './register/register';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing-module';

@NgModule({
    imports: [ReactiveFormsModule, HttpClientModule, RouterModule, AuthRoutingModule],
    exports: [Login, Register],
    declarations: [Auth, Login, Register],
    providers: [],
})
export class AuthModule { }
