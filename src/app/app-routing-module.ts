import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteNotFound } from './shared/components/route-not-found/route-not-found';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**',
    component: RouteNotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
