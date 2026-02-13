export interface User {
  id: number;
  username: string;
  password: string;
  role: 'ROLE_ADMIN' | 'ROLE_CLIENTE';
  dataCriacao?: string;
  dataModificacao?: string;
  criadoPor?: string;
  modificadoPor?: string;
}