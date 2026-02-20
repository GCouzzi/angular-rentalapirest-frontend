import { NgModule } from '@angular/core';
import { AlugueisNovo } from './alugueis-novo/alugueis-novo';
import { AlugueisCheckout } from './alugueis-checkout/alugueis-checkout';
import { AlugueisLista } from './alugueis-lista/alugueis-lista';
import { AlugueisRoutingModule } from './alugueis-routing-module';
import { AlugueisBusca } from './alugueis-busca/alugueis-busca';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [AlugueisRoutingModule, FormsModule, CommonModule, ReactiveFormsModule],
  exports: [],
  declarations: [
    AlugueisNovo,
    AlugueisCheckout,
    AlugueisLista,
    AlugueisBusca
  ],
  providers: [],
})
export class AlugueisModule { }
