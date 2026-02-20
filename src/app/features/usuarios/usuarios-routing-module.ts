import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Usuarios } from '../../shared/layout/usuarios/usuarios';
import { UsuariosLista } from './usuarios-lista/usuarios-lista';
import { UsuariosBusca } from './usuarios-busca/usuarios-busca';

const routes: Routes = [
  {
    path: '',
    component: Usuarios,
    children: [
      { path: 'listar', component: UsuariosLista },
      { path: 'buscar', component: UsuariosBusca },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
