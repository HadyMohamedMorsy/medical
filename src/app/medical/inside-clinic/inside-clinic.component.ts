import { Component, inject } from '@angular/core';

import { ActionsConfirmComponent } from '@shared/sharedComponent/actions-confirm/actions-confirm.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';

@Component({
  selector: 'app-inside-clinic',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , ActionsConfirmComponent , BreadcrumbComponent],
  templateUrl: './inside-clinic.component.html',
  styleUrls: ['./inside-clinic.component.scss'],
  providers: [PatientsService]

})
export class InsideClinicComponent {
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
  this.data$ = this.DataBindTableService.getPatients();
  this.checked = this.getFields.gridFields('FieldCheck');
  }
}
