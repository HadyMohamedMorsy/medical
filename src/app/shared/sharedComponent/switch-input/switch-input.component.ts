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
  <label class="m-0 font-medium" for="{{field.props['id']}}">{{field.props.label}}</label>
  <div class="grid align-items-center mt-3">
    <p-inputSwitch
      [formControl]="formControl"
      [formlyAttributes]="field"
      [inputId]="id"
    >
    </p-inputSwitch>
  </div>
  `,
  styleUrls: ['./switch-input.component.scss']
})
export class SwitchInputComponent extends FieldType<FieldTypeConfig> {

}
