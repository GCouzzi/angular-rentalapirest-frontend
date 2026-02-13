export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'date';
  placeholder: string;
  validators: any[];
  minLength?: number;
  maxLength?: number;
  errorMessages?: { [key: string]: string };
}

export interface AuthFormConfig {
  title: string;
  submitButtonText: string;
  fields: FormField[];
  showPasswordConfirmation?: boolean;
}

const LOGIN_REGISTER_FIELDS: FormField[] = [
  {
    name: 'username',
    label: 'Usuário',
    type: 'text',
    placeholder: 'Digite seu usuário',
    minLength: 8,
    maxLength: 20,
    validators: ['required', 'minLength:8', 'maxLength:20'],
    errorMessages: {
      required: 'Usuário é obrigatório',
      minlength: 'Mínimo 8 caracteres',
      maxlength: 'Máximo 20 caracteres',
    },
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: '••••••••',
    minLength: 6,
    maxLength: 8,
    validators: ['required', 'minLength:6', 'maxLength:8'],
    errorMessages: {
      required: 'Senha é obrigatória',
      minlength: 'Mínimo 6 caracteres',
      maxlength: 'Máximo 8 caracteres',
    },
  },
];

export const LOGIN_CONFIG: AuthFormConfig = {
  title: 'Login',
  submitButtonText: 'Entrar',
  fields: LOGIN_REGISTER_FIELDS,
};

export const REGISTER_CONFIG: AuthFormConfig = {
  title: 'Cadastro',
  submitButtonText: 'Cadastrar',
  showPasswordConfirmation: true,
  fields: LOGIN_REGISTER_FIELDS,
};
