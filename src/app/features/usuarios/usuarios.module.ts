import { NgModule } from '@angular/core';
import { UsuariosLista } from './usuarios-lista/usuarios-lista';
import { UsuariosRoutingModule } from './usuarios-routing-module';
import { UsuariosNovo } from './usuarios-novo/usuarios-novo';
import { UsuariosBusca } from './usuarios-busca/usuarios-busca';

@NgModule({
  imports: [UsuariosRoutingModule],
  exports: [],
  declarations: [
    UsuariosLista,
    UsuariosNovo,
    UsuariosBusca,
  ],
  providers: [],
})
export class UsuariosModule { }
