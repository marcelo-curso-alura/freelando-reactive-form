import { Validators } from '@angular/forms';
import { FormConfig } from '../shared/models/form-config.interface';
import { cpfValidator } from '../shared/validators/cpf.validator';
import { emailExistenteValidator } from '../shared/validators/emailExistente.validator';

export function getDadosPessoaisConfig(emailService: any): FormConfig {
  return {
    title: 'Crie seu cadastro',
    description: 'Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers.',
    fields: [
      {
        label: 'Nome Completo',
        formControlName: 'nomeCompleto',
        type: 'text',
        required: true,
        errorMessages: {
          required: 'Nome completo é obrigatório'
        },
        validators: [Validators.required],
        width: 'full'
      },
      {
        label: 'CPF',
        formControlName: 'cpf',
        type: 'text',
        required: true,
        placeholder: '000.000.000-00',
        errorMessages: {
          required: 'CPF é obrigatório',
          cpfInvalido: 'CPF inválido'
        },
        validators: [Validators.required, cpfValidator],
        width: 'full'
      },
      {
        label: 'Estado',
        formControlName: 'estado',
        type: 'select',
        required: true,
        placeholder: 'Selecione',
        errorMessages: {
          required: 'Estado é obrigatório'
        },
        validators: [Validators.required],
        width: 'half'
      },
      {
        label: 'Cidade',
        formControlName: 'cidade',
        type: 'select',
        required: true,
        placeholder: 'Selecione',
        errorMessages: {
          required: 'Cidade é obrigatória'
        },
        validators: [Validators.required],
        dependsOn: 'estado',
        width: 'half'
      },
      {
        label: 'Email',
        formControlName: 'email',
        type: 'email',
        required: true,
        errorMessages: {
          required: 'Email é obrigatório',
          email: 'Email inválido',
          emailExistente: 'Este email já está cadastrado'
        },
        validators: [Validators.required, Validators.email],
        asyncValidators: [emailExistenteValidator(emailService)],
        width: 'full'
      },
      {
        label: 'Senha',
        formControlName: 'senha',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Senha é obrigatória',
          minlength: 'Senha deve ter pelo menos 6 caracteres'
        },
        validators: [Validators.required, Validators.minLength(6)],
        width: 'half'
      },
      {
        label: 'Repita a senha',
        formControlName: 'confirmaSenha',
        type: 'password',
        required: true,
        errorMessages: {
          required: 'Confirmação de senha é obrigatória'
        },
        validators: [Validators.required],
        width: 'half'
      }
    ]
  };
}
