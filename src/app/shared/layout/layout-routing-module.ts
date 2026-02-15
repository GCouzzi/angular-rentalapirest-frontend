import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from '../../features/home/home/home';

const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'clientes', loadChildren: () => import('../../features/usuarios/usuarios.module').then(m => m.UsuariosModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
