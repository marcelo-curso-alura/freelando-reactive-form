import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";
import { EmailValidatorService } from "../services/email-validator.service";

export function emailExistenteValidator(emailService: EmailValidatorService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) {
      return of(null);
    }

    return emailService.verificarEmailExistente(control.value).pipe(
      map(existe => existe ? { emailExistente: true } : null),
      catchError(() => of(null))
    );
  };
}