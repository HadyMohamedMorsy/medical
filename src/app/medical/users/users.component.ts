import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { HeaderTableComponent } from '@shared/sharedComponent/header-table/header-table.component';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [SharedModuleModule , TableComponent , HeaderTableComponent , ActionsComponent ,BreadcrumbComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  // injection dependency services
  private getFields = inject(FormsService);
  private DataBindTableService = inject(PatientsService);

  items : any;
  data$ : any;
  addFields !: FormlyFieldConfig[];
  deleting !:FormlyFieldConfig[];
  updateField !: FormlyFieldConfig[];
  ShowFields !:FormlyFieldConfig[];

  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'Users'},
    ];
    this.data$ = this.DataBindTableService.getPatients();
    this.addFields = this.getFields.gridFields('Users',[
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
    ]);
    this.deleting = this.getFields.gridFields('FieldsDelete');
    this.updateField = this.getFields.gridFields('FieldsUpdateUsers',[
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
    ]);
    this.ShowFields = this.getFields.gridFields('FieldsShowUsers',
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
          ]
        ]
    )
  }
}
