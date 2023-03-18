import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [],
  exports : [CommonModule ,
    RouterModule, ReactiveFormsModule
  , FormlyModule , FormlyPrimeNGModule,
    ButtonModule
]
})
export class SharedModuleModule { }
