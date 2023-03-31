import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent , ActionsComponent ,BreadcrumbComponent],
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent {
  // injection dependency services
  private getFields = inject(FormsService);
  private DataBindTableService = inject(PatientsService);
  private Route = inject(Router);
  private activateRouter = inject(ActivatedRoute);


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
    this.confirmFields = this.getFields.gridFields('FieldsConfirmPatientsAppointment' ,
    [
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
    ]
    )
    this.deleting = this.getFields.gridFields('FieldsDelete');
    this.updateField = this.getFields.gridFields('FieldUpdatePatient',
    [
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
      ]
    ]
    );
    this.uploadFields = this.getFields.gridFields('FieldUpload');
  }

  routeProfileParent(id : number) : void {
    this.Route.navigate([`/clinic/profile/${id}`]);
  }

}
