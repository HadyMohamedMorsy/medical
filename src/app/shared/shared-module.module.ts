import { userSpecificCharactar, userSpecificCharactarMessage, userValidator, userValidatorMessage } from '../global/validation/validations';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import { CalenderComponent } from './sharedComponent/calender/calender.component';
import { CommonModule } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {MatDialogModule} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {SwitchInputComponent} from './sharedComponent/switch-input/switch-input.component';
import {TableModule} from 'primeng/table';
import { UploadComponent } from './sharedComponent/upload/upload.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports : [
    FormlyModule.forRoot({
      types: [
        { name: 'switchInput', component: SwitchInputComponent },
        { name: 'calender', component: CalenderComponent },
        { name: 'FileUpload', component: UploadComponent },
      ],
      validators: [
        { name: 'user', validation: userValidator },
        { name: 'noSpecialCharacters', validation: userSpecificCharactar }
      ],
      validationMessages: [
        { name: 'user', message: userValidatorMessage },
        { name: 'noSpecialCharacters', message: userSpecificCharactarMessage },
      ],
    }),
  ],
  exports : [
    CommonModule ,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormlyModule ,
    FormlyPrimeNGModule,
    ButtonModule ,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    DialogModule,
    MatDialogModule,
    ProgressBarModule,
    ToastModule
]
})
export class SharedModuleModule { }
