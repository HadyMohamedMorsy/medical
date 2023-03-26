import { AbstractControl, ValidationErrors } from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';

export function userValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value || value.trim() === '') {
        return { user: true };
    }
    return null;
}

export function userValidatorMessage(error: any, field: FormlyFieldConfig) {
    return `"${field.formControl?.value}" is not a valid IP Address`;
}