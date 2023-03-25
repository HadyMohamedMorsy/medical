import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { FormsService } from '@services/forms/forms.service';
import { FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule , SharedModuleModule , TableComponent , HeaderTableComponent , ActionsComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [AppointmentsService]
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

  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Appointments'},
    ];
    this.data$ = this.DataBindTableService.getAppointments();
    this.addFields = this.getFields.gridFields('Appointments',
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
      ]
    ]
    )
    this.updateFields = this.getFields.gridFields('FieldsUpdateAppointments',
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
      ]
    ]
    )
    this.ShowFields = this.getFields.gridFields('FieldShowAppointments',
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
      ]
    ]
    )
    this.deleting = this.getFields.gridFields('FieldsDelete');

  }
}
