import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { TimelineModule } from 'primeng/timeline';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModuleModule , TimelineModule , TableComponent , 
    BreadcrumbComponent , ActionsComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers : [PatientsService]
})
export class ProfileComponent {
  private DataBindTableService =  inject(PatientsService);
  private getFields = inject(FormsService);
  events : any;
  items : any;
  data$ : any;
  fieldsModel  = {};
  form = new FormGroup({});
  updateField !: FormlyFieldConfig[];
  uploadFields !: FormlyFieldConfig[];
  PatientsFields!: FormlyFieldConfig[];
  checked !:FormlyFieldConfig[];

  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'profile'},
    ];
    this.events = [
      { status: 'statement', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#EF4444', image: 'game-controller.jpg' },
      { status: 'consultation', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#EF4444' },
      { status: 'consultation', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#EF4444' },
    ];
    this.data$ = this.DataBindTableService.getPatients();
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
      ]
    )
    this.updateField = this.getFields.gridFields('FieldsUpdateAppointments',
      [
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
      ]
    )
    this.checked = this.getFields.gridFields('FieldCheck');
    this.uploadFields = this.getFields.gridFields('FieldUpload');
  }

  onSubmit(fieldsModel : any){

  }
}
