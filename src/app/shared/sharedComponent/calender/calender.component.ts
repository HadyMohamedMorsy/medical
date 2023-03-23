import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyPrimeNGModule} from '@ngx-formly/primeng';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule , FormlyModule , FormlyPrimeNGModule , CalendarModule],
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent  extends FieldType<FieldTypeConfig> {

}
