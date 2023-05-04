import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

 function userValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value || value.trim() === '') {
        return { userName: true };
    }
    return null;
}

 function userValidatorMessage(error: any, field: FormlyFieldConfig) {
  if (!field.formControl?.value) {
    return `"${field.key}" is required`;
  }
  return `"${field.formControl?.value}" is invalid`;
}

 function userSpecificCharactar(control: AbstractControl): ValidationErrors | null {
  const pattern = /^[a-zA-Z0-9]*$/;
  if (!pattern.test(control.value)) {
    return { hasSpecialCharacters: true };
  }
  return null;
}

 function userSpecificCharactarMessage(error: any, field: FormlyFieldConfig) {
    return `"${field.key}" cannot contain special characters`;
}

function fieldMatchValidator(control: AbstractControl){
  const { password, passwordConfirm } = control.value;

    // avoid displaying the message error when values are empty
    if (!passwordConfirm || !password) {
      return null;
    }

    if (passwordConfirm === password) {
      return null;
    }

    console.log(password , passwordConfirm);


  return { fieldMatch:  'Password Not Matching'};
}

export {
  userValidator,
  userValidatorMessage,
  userSpecificCharactar,
  userSpecificCharactarMessage,
  fieldMatchValidator
}
