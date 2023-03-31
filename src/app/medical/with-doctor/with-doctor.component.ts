import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { AppointmentsService } from '@services/appointments/appointments.service';

@Component({
  selector: 'app-with-doctor',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , ActionsComponent , BreadcrumbComponent],
  templateUrl: './with-doctor.component.html',
  styleUrls: ['./with-doctor.component.scss'],
})
export class WithDoctorComponent {
  // injection dependency services
  private getFields = inject(FormsService);
  private DataBindTableService = inject(AppointmentsService);

  checked !:FormlyFieldConfig[];
  items : any;
  data$ : any;

  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Confirm-Patients'},
  ];
  this.data$ = this.DataBindTableService.withDoctorStatusForAppointments();
  this.checked = this.getFields.gridFields('FieldCheck');
  }
}
