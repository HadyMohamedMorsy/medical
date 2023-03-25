import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { SharedModuleModule } from '@shared/shared-module.module';
import { PatientsService } from '@services/patients/patients.service';
import { FormsService } from '@services/forms/forms.service';
import { ActionsConfirmComponent } from '@shared/sharedComponent/actions-confirm/actions-confirm.component';
import { FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-confirm-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , ActionsConfirmComponent],
  templateUrl: './confirm-patients.component.html',
  styleUrls: ['./confirm-patients.component.scss'],
  providers: [PatientsService]
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
  this.data$ = this.DataBindTableService.getPatients();
  this.checked = this.getFields.gridFields('FieldCheck');
  }
}
