import { Component, inject } from '@angular/core';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { FormsService } from '@services/forms/forms.service';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent , ActionsComponent],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
  providers: [PatientsService]
})
export class PatientsComponent {
  // injection dependency services
  private getFields = inject(FormsService);
  private DataBindTableService = inject(PatientsService);

  items : any;
  data$ : any;
  addFields !: FormlyFieldConfig[];
  confirmFields !: FormlyFieldConfig[];
  deleting !:FormlyFieldConfig[];
  updateField !: FormlyFieldConfig[];
  uploadFields !: FormlyFieldConfig[];

  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'Patients'},
    ];
    this.data$ = this.DataBindTableService.getPatients();
    
    this.addFields = this.getFields.gridFields('Patients',
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
      ]
    ]
    );
    this.confirmFields = this.getFields.gridFields('ConfirmPatients' ,
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
    ]
    )
    this.deleting = this.getFields.gridFields('FieldsDelete');
    this.updateField = this.getFields.gridFields('FieldUpdatePatient',
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
      ],
      [
        {
          media : 'md',
          colNumber : '12'
        },
      ]
    ]
    );

    this.uploadFields = this.getFields.gridFields('FieldUpload');
  }

}
