import { Component, inject } from '@angular/core';

import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { CardModule } from 'primeng/card';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '@services/dashboard/dashboard.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModuleModule , CardModule , TableComponent ,ActionsComponent , BreadcrumbComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private DataBindTableService =  inject(PatientsService);
  private getFields = inject(FormsService);
  private Route = inject(Router);
  private activateRouter = inject(ActivatedRoute);
  private DashboardService = inject(DashboardService);

  items : any;
  data$ : any;
  confirmFields !: FormlyFieldConfig[];
  deleting !:FormlyFieldConfig[];
  updateField !: FormlyFieldConfig[];
  uploadFields !: FormlyFieldConfig[];
  DashboardData$ : any;

  ngOnInit() {
    this.DashboardData$ = this.DashboardService.dashboardData();
    this.items = [
        {label:'Clinic'},
        {label:'Home'},
    ];
    this.data$ = this.DataBindTableService.getPatients();
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
    this.Route.navigate([`profile/${id}`] , {
      relativeTo: this.activateRouter,
    });
  }
}

