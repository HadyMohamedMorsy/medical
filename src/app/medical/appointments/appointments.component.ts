import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent , ActionsComponent, BreadcrumbComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent {
      // injection dependency services
  private getFields  = inject(FormsService);
  private DataBindTableService =  inject(AppointmentsService);

  data$ : any;
  items : any;
  display: boolean = false;
  addFields !: FormlyFieldConfig[];
  updateFields !: FormlyFieldConfig[];
  ShowFields !:FormlyFieldConfig[];
  deleting !:FormlyFieldConfig[];
  uploadFields !: FormlyFieldConfig[];
  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Appointments'},
    ];
    this.data$ = this.DataBindTableService.getAppointments();
    this.ShowFields = this.getFields.gridFields('FieldsShowAppointments' ,
      [
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
      ]
    )
  }
}
