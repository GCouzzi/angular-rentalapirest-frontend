import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AluguelResponseDTO } from '../../../core/models/aluguel.model';
import { UsuarioResponseDTO } from '../../../core/models/user.model';
import { AutomovelResponseDTO } from '../../../core/models/automovel.model';


@Component({
  selector: 'app-alugueis-novo',
  standalone: false,
  templateUrl: './alugueis-novo.html',
  styleUrl: './alugueis-novo.scss',
})
export class AlugueisNovo {
  form!: FormGroup;
  errorMessage = '';
  resultado: AluguelResponseDTO | null = null;

  usuarios: UsuarioResponseDTO[] = [];
  automoveis: AutomovelResponseDTO[] = [];

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      usuarioUsername: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ]],
      automovelPlaca: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^[A-Z]{3}-[0-9]{4}$/)
      ]]
    });

    this.loadUsuarios();
    this.loadAutomoveis();
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

  loadAutomoveis(): void {
    this.automoveis = [
      { placa: 'ABC-1234', marca: 'Toyota', modelo: 'Corolla', cor: 'Prata', valorPorMinuto: 2.50, status: 'DISPONIVEL' },
      { placa: 'DEF-5678', marca: 'Honda', modelo: 'Civic', cor: 'Preto', valorPorMinuto: 3.00, status: 'DISPONIVEL' }
    ];
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.errorMessage = '';
    this.resultado = null;
  }

  onLimpar(): void {
    this.form.reset();
    this.errorMessage = '';
    this.resultado = null;
  }

  getFieldClass(field: string): string {
    const control = this.form.get(field);
    if (!control || !control.touched) return '';
    return control.invalid ? 'is-invalid' : 'is-valid';
  }
}
