import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {ButtonModule} from 'primeng/button';
import {SwitchInputComponent} from '../sharedComponent/switch-input/switch-input.component';

@NgModule({
  declarations: [],
  imports : [
    FormlyModule.forRoot({
      types: [
        { name: 'switchInput', component: SwitchInputComponent },
      ],
    }),
  ],
  exports : [CommonModule ,
    RouterModule, ReactiveFormsModule
  , FormlyModule ,
    FormlyPrimeNGModule,
    ButtonModule ,
]
})
export class SharedModuleModule { }
