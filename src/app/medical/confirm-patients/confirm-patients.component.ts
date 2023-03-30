import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';

@Component({
  selector: 'app-confirm-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , ActionsComponent , BreadcrumbComponent],
  templateUrl: './confirm-patients.component.html',
  styleUrls: ['./confirm-patients.component.scss'],
})
export class ConfirmPatientsComponent {
  // injection dependency services
  private getFields = inject(FormsService);
  private DataBindTableService = inject(PatientsService);

  checked !:FormlyFieldConfig[];
  items : any;
  data$ : any;
  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Confirm-Patients'},
  ];
  // ['pending', 'insideClinic','withDoctor', 'complete','cancel']

  this.data$ = this.DataBindTableService.getPatients();
  this.checked = this.getFields.gridFields('FieldCheck');
  }
}
