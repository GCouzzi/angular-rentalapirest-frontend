import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlugueisCheckout } from './alugueis-checkout/alugueis-checkout';
import { AlugueisNovo } from './alugueis-novo/alugueis-novo';
import { AlugueisLista } from './alugueis-lista/alugueis-lista';
import { Alugueis } from '../../shared/layout/alugueis/alugueis';
import { AlugueisBusca } from './alugueis-busca/alugueis-busca';


const routes: Routes = [
  {
    path: '',
    component: Alugueis,
    children: [
      { path: 'listar', component: AlugueisLista },
      { path: 'checkin', component: AlugueisNovo },
      { path: 'checkout', component: AlugueisCheckout },
      { path: 'buscar', component: AlugueisBusca}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlugueisRoutingModule { }
