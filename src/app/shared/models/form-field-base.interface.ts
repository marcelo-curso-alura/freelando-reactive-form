export interface FormFieldBase {
  label: string;
  formControlName: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  errorMessages?: {[key: string]: string};
  validators?: any[];
  asyncValidators?: any[];
  width?: 'full' | 'half';
  dependsOn?: string;
}
