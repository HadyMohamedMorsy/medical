import { fieldMatchValidator, userSpecificCharactar, userSpecificCharactarMessage, userValidator, userValidatorMessage  } from '@validation/validations';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import { CalenderComponent } from './sharedComponent/calender/calender.component';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SwitchInputComponent} from './sharedComponent/switch-input/switch-input.component';
import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { UploadComponent } from './sharedComponent/upload/upload.component';
import {LoginForm} from '@enum/forms/LoginForm';
import { GalleriaModule } from 'primeng/galleria';
import { FieldsConfirmPassword } from '@enum/forms/FieldsConfirmPassword';

@NgModule({
  declarations: [],
  imports : [
    FormlyModule.forRoot({
      types: [
        { name: 'switchInput', component: SwitchInputComponent },
        { name: 'datapick', component: CalenderComponent },
        { name: 'FileUpload', component: UploadComponent },
      ],
      validators: [
        { name: LoginForm.VALIDATIONUSERNAME, validation: userValidator },
        { name: LoginForm.VALIDATIONUSERNAMECHARACTER, validation: userSpecificCharactar },
        { name: FieldsConfirmPassword.VALIDATIOMATCH, validation: fieldMatchValidator },
      ],
      validationMessages: [
        { name: LoginForm.VALIDATIONUSERNAME, message: userValidatorMessage },
        { name: LoginForm.VALIDATIONUSERNAMECHARACTER, message: userSpecificCharactarMessage },
      ],
    }),
  ],
  exports : [
    CommonModule ,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule ,
    FormlyPrimeNGModule,
    ButtonModule ,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    DialogModule,
    MatDialogModule,
    ProgressBarModule,
    ToastModule,
    GalleriaModule
]
})
export class SharedModuleModule { }
