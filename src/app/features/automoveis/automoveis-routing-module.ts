import { Automoveis } from '../../shared/layout/automoveis/automoveis';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomoveisLista } from './automoveis-lista/automoveis-lista';
import { AutomoveisNovo } from './automoveis-novo/automoveis-novo';
import { AutomoveisBusca } from './automoveis-busca/automoveis-busca';

const routes: Routes = [
  {
    path: '',
    component: Automoveis,
    children: [
      { path: 'listar', component: AutomoveisLista },
      { path: 'novo', component: AutomoveisNovo },
      { path: 'buscar', component: AutomoveisBusca },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutomoveisRoutingModule { }
