import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControlOptions } from '@angular/forms';
import { FormConfig } from '../models/form-config.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {
  private formConfigs: {[key: string]: Function} = {};

  constructor(private fb: FormBuilder) {}

  registerFormConfig(formKey: string, configFn: Function): void {
    this.formConfigs[formKey] = configFn;
  }

  getFormConfig(formKey: string, ...args: any[]): FormConfig {
    if (!this.formConfigs[formKey]) {
      throw new Error(`Configuração de formulário '${formKey}' não encontrada`);
    }

    return this.formConfigs[formKey](...args);
  }

  createFormGroup(config: FormConfig, formOptions?: AbstractControlOptions): FormGroup {
    const formControls: {[key: string]: any} = {};

    config.fields.forEach(field => {
      formControls[field.formControlName] = [
        '',
        field.validators || [],
        field.asyncValidators || []
      ];
    });

    return this.fb.group(formControls, formOptions);
  }
}
