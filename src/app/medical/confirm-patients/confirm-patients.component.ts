import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { SharedModuleModule } from '@shared/shared-module.module';
import { PatientsService } from '@services/patients/patients.service';
import { FormsService } from '@services/forms/forms.service';
import { ActionsConfirmComponent } from '@shared/sharedComponent/actions-confirm/actions-confirm.component';

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
  private getFieldsPatients  = inject(FormsService);
  private PatientsService =  inject(PatientsService);
  items : any;
  patients$ : any;
  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Confirm-Patients'},
  ];
  this.patients$ = this.PatientsService.getPatients();
  }
}
