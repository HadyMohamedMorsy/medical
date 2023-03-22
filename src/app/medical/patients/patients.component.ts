import { Component, inject } from '@angular/core';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { DialogComponent } from '@shared/sharedComponent/dialog/dialog.component';
@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent , DialogComponent],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent {
  private PatientsService =  inject(PatientsService);
  items : any;
  patients$ : any;

  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'Patients'},
    ];

    this.patients$ = this.PatientsService.getPatients();
  }

}
