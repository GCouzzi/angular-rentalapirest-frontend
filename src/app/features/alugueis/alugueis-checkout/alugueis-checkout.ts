import { Component } from '@angular/core';
import { AluguelResponseDTO } from '../../../core/models/aluguel.model';

@Component({
  selector: 'app-alugueis-busca',
  standalone: false,
  templateUrl: './alugueis-checkout.html',
  styleUrl: './alugueis-checkout.scss',
})
export class AlugueisCheckout {
  recibo = '';
  errorMessage = '';
  resultado: AluguelResponseDTO | null = null;

  onCheckout(): void {
    if (!this.recibo.trim()) return;
    this.errorMessage = '';
    this.resultado = null;

    this.resultado = {
    usuarioUsername: 'joao.silva',
    automovelMarca: 'Toyota',
    automovelModelo: 'Corolla XEI',
    automovelCor: 'Prata',
    automovelPlaca: 'ABC-1234',
    automovelRecibo: '20240301080000',
    dataInicio: '2024-03-01 08:00:00',
    dataFim: '2024-03-01 10:30:00',
    valor: 375.00,
    desconto: 37.50
  };
  }

  onLimpar(): void {
    this.recibo = '';
    this.errorMessage = '';
    this.resultado = null;
  }
}
