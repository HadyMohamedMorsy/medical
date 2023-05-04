import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { TimelineModule } from 'primeng/timeline';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModuleModule , TimelineModule , TableComponent ,
    BreadcrumbComponent , ActionsComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  private DataBindTableService =  inject(PatientsService);
  private getFields = inject(FormsService);
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  events : any;
  items : any;
  data$ : any;
  FieldsProfile:any;
  fieldsModel  = {};
  form = new FormGroup({});
  updateField !: FormlyFieldConfig[];
  uploadFields !: FormlyFieldConfig[];
  PatientsFields!: FormlyFieldConfig[];
  checked !:FormlyFieldConfig[];
  idParam : any;
  ShowFields !:FormlyFieldConfig[];
  ngOnInit() {

    this.items = [
        {label:'Clinic'},
        {label:'profile'},
    ];
   this.data$ = this.route.data.pipe(
      map(({data}) => data),
    );
    this.idParam =  this.route.snapshot.paramMap.get('id');

    this.PatientsFields = this.getFields.gridFields('FieldsProfile',
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
    this.FieldsProfile = this.DataBindTableService.getPatient(this.idParam).subscribe(val =>{
      this.fieldsModel =  val.result
    })
    this.updateField = this.getFields.gridFields('FieldsUpdateAppointments',
      [
        [
          {
            media : 'md',
            colNumber : '12'
          }
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          }
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          }
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          }
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          }
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          }
        ],
      ]
    )
    this.ShowFields = this.getFields.gridFields('FieldsShowAppointmentsProfile' ,
    [
      [
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '6'
        },
        {
          media : 'md',
          colNumber : '12'
        },
        {
          media : 'md',
          colNumber : '12'
        },
      ]
    ]
    )
    this.checked = this.getFields.gridFields('FieldCheck');

    this.uploadFields = this.getFields.gridFields('FieldUpload');
  }

}
