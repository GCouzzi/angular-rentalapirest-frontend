import { Component } from '@angular/core';
import { AluguelResponseDTO } from '../../../core/models/aluguel.model';
import { Page } from '../../../core/models/page.model';

@Component({
  selector: 'app-alugueis-lista',
  standalone: false,
  templateUrl: './alugueis-lista.html',
  styleUrl: './alugueis-lista.scss',
})
export class AlugueisLista {
  alugueis: AluguelResponseDTO[] = [];
  page: Page<AluguelResponseDTO> | null = null;

  currentPage = 0;
  pageSize = 10;

  ngOnInit(): void {
    this.loadAlugueis();
  }

  goToPage(p: number): void {
    this.currentPage = p;
  }

  onPageSizeChange(): void {
    this.currentPage = 0;
  }

  getPageNumbers(): number[] {
    if (!this.page) return [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.page.totalPages - 1, this.currentPage + 2);
    const range: number[] = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }

  loadAlugueis(): void {
    this.alugueis = [
      {
        usuarioUsername: 'joao.silva',
        automovelMarca: 'Toyota',
        automovelModelo: 'Corolla XEI',
        automovelCor: 'Prata',
        automovelPlaca: 'ABC-1234',
        automovelRecibo: 'REC-001',
        dataInicio: '2024-03-01 08:00:00',
        dataFim: '2024-03-01 10:30:00',
        valor: 375.00,
        desconto: 37.50
      },
      {
        usuarioUsername: 'joao.silva',
        automovelMarca: 'Honda',
        automovelModelo: 'Civic Touring',
        automovelCor: 'Preto',
        automovelPlaca: 'XYZ-5678',
        automovelRecibo: 'REC-002',
        dataInicio: '2024-03-10 14:00:00',
        dataFim: null,
        valor: null,
        desconto: null
      },
      {
        usuarioUsername: 'joao.silva',
        automovelMarca: 'Volkswagen',
        automovelModelo: 'Golf GTI',
        automovelCor: 'Branco',
        automovelPlaca: 'DEF-9012',
        automovelRecibo: 'REC-003',
        dataInicio: '2024-02-15 09:00:00',
        dataFim: '2024-02-15 11:00:00',
        valor: 240.00,
        desconto: null
      }
    ];
  }
}
