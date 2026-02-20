import { Component } from '@angular/core';
import { UsuarioResponseDTO } from '../../../core/models/user.model';
import { AluguelResponseDTO } from '../../../core/models/aluguel.model';
import { Page } from '../../../core/models/page.model';

@Component({
  selector: 'app-alugueis-busca',
  standalone: false,
  templateUrl: './alugueis-busca.html',
  styleUrl: './alugueis-busca.scss',
})
export class AlugueisBusca {
  recibo = '';
  username = '';
  errorMessage = '';

  resultadoRecibo: AluguelResponseDTO | null = null;
  alugueis: AluguelResponseDTO[] = [];
  page: Page<AluguelResponseDTO> | null = null;
  usuarios: UsuarioResponseDTO[] = [];

  currentPage = 0;
  pageSize = 10;

  ngOnInit(): void {
    this.loadUsuarios();
  }

  loadUsuarios(): void {
    this.usuarios = [
      {
        id: 1,
        username: 'joao.silva',
        nomeCompleto: 'João da Silva',
        email: 'joao.silva@email.com',
        cpf: '111.222.333-44',
        telefone: '11999998888',
        role: 'CLIENTE'
      },
      {
        id: 2,
        username: 'maria.souza',
        nomeCompleto: 'Maria Souza',
        email: 'maria.souza@email.com',
        cpf: '555.666.777-88',
        telefone: '21988887777',
        role: 'CLIENTE'
      },
      {
        id: 3,
        username: 'admin.master',
        nomeCompleto: 'Administrador do Sistema',
        email: 'admin@locadora.com',
        cpf: '000.000.000-00',
        telefone: '11900000000',
        role: 'ADMIN'
      },
      {
        id: 4,
        username: 'carlos.pereira',
        nomeCompleto: 'Carlos Eduardo Pereira',
        email: 'carlos.edu@email.com',
        cpf: '123.456.789-00',
        telefone: '31977776666',
        role: 'CLIENTE'
      },
      {
        id: 5,
        username: 'ana.costa',
        nomeCompleto: 'Ana Paula Costa',
        email: 'ana.costa@email.com',
        cpf: '987.654.321-99',
        telefone: '41966665555',
        role: 'CLIENTE'
      }
    ];
  }

  onBuscarPorRecibo(): void {
    if (!this.recibo.trim()) return;
    this.errorMessage = '';
    this.resultadoRecibo = null;
    this.alugueis = [];
    this.page = null;

    this.resultadoRecibo = {
      usuarioUsername: 'joao.silva',
      automovelMarca: 'Toyota',
      automovelModelo: 'Corolla XEI',
      automovelCor: 'Prata',
      automovelPlaca: 'ABC-1234',
      automovelRecibo: this.recibo,
      dataInicio: '2024-03-01 08:00:00',
      dataFim: '2024-03-01 10:30:00',
      valor: 375.00,
      desconto: 37.50
    };
  }

  onBuscarPorUsername(): void {
    if (!this.username.trim()) return;
    this.errorMessage = '';
    this.resultadoRecibo = null;
    this.alugueis = [];
    this.page = null;
    this.currentPage = 0;

    this.alugueis = [
      {
        usuarioUsername: this.username,
        automovelMarca: 'Toyota',
        automovelModelo: 'Corolla XEI',
        automovelCor: 'Prata',
        automovelPlaca: 'ABC-1234',
        automovelRecibo: '20240301080000',
        dataInicio: '2024-03-01 08:00:00',
        dataFim: '2024-03-01 10:30:00',
        valor: 375.00,
        desconto: 37.50
      },
      {
        usuarioUsername: this.username,
        automovelMarca: 'Honda',
        automovelModelo: 'Civic Touring',
        automovelCor: 'Preto',
        automovelPlaca: 'XYZ-5678',
        automovelRecibo: '20240310140000',
        dataInicio: '2024-03-10 14:00:00',
        dataFim: null,
        valor: null,
        desconto: null
      }
    ];
  }

  goToPage(p: number): void {
    this.currentPage = p;
    this.onBuscarPorUsername();
  }

  onPageSizeChange(): void {
    this.currentPage = 0;
    this.onBuscarPorUsername();
  }

  getPageNumbers(): number[] {
    if (!this.page) return [];
    const start = Math.max(0, this.currentPage - 2);
    const end = Math.min(this.page.totalPages - 1, this.currentPage + 2);
    const range: number[] = [];
    for (let i = start; i <= end; i++) range.push(i);
    return range;
  }

  onLimpar(): void {
    this.recibo = '';
    this.username = '';
    this.errorMessage = '';
    this.resultadoRecibo = null;
    this.alugueis = [];
    this.page = null;
    this.currentPage = 0;
  }
}
