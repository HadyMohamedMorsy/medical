import { Component, inject } from '@angular/core';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { FormsService } from '@services/forms/forms.service';
import { FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent {
  // injection dependency services
  private getFieldsAddPatients  = inject(FormsService);
  private PatientsService =  inject(PatientsService);
  items : any;
  patients$ : any;
  addPatientsFields !: FormlyFieldConfig[];
  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'Patients'},
    ];
    this.patients$ = this.PatientsService.getPatients();
    this.addPatientsFields = this.getFieldsAddPatients.gridFields('Patients',
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
          colNumber : '12'
        },
      ]
    ]
    );

    console.log(this.addPatientsFields);

  }

}
