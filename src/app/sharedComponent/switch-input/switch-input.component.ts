import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import {InputSwitchModule} from 'primeng/inputswitch';

@Component({
  selector: 'app-switch-input',
  standalone: true,
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    FormlyModule ,
    FormlyPrimeNGModule,
    InputSwitchModule
  ],
  template: `
  <div class="grid align-items-center mt-3">
    <p-inputSwitch
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
    </p-inputSwitch>
    <h5 class="m-0 ml-3 font-medium"> {{field.props.label}} </h5>
  </div>
  `,
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent extends FieldType<FieldTypeConfig> {

}
