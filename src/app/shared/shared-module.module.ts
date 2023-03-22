import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {ButtonModule} from 'primeng/button';
import {SwitchInputComponent} from './sharedComponent/switch-input/switch-input.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [],
  imports : [
    FormlyModule.forRoot({
      types: [
        { name: 'switchInput', component: SwitchInputComponent },
      ],
    }),
  ],
  exports : [
    CommonModule ,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  , FormlyModule ,
    FormlyPrimeNGModule,
    ButtonModule ,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    DialogModule
]
})
export class SharedModuleModule { }
