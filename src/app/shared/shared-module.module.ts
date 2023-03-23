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
import {MatDialogModule} from '@angular/material/dialog';
import { CalenderComponent } from './sharedComponent/calender/calender.component';

@NgModule({
  declarations: [],
  imports : [
    FormlyModule.forRoot({
      types: [
        { name: 'switchInput', component: SwitchInputComponent },
        { name: 'calender', component: CalenderComponent },
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
]
})
export class SharedModuleModule { }
