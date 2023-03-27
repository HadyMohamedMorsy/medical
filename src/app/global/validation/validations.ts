import { AbstractControl, ValidationErrors } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

export function userValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || value.trim() === '') {
        return { user: true };
    }
    return null;
}

export function userSpecificCharactar(control: AbstractControl): ValidationErrors | null {
  const pattern = /^[a-zA-Z0-9]*$/;
  if (!pattern.test(control.value)) {
    return { noSpecialCharacters: true };
  }
  return null;
}



export function userValidatorMessage(error: any, field: FormlyFieldConfig) {
    if (!field.formControl?.value) {
      return `"${field.key}" is required`;
    }
    return `"${field.formControl?.value}" is invalid`;
}

export function userSpecificCharactarMessage(error: any, field: FormlyFieldConfig) {
    return `"${field.key}" cannot contain special characters`;
}
