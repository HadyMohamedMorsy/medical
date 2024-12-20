import { Component, inject } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DashboardService } from '@services/dashboard/dashboard.service';
import { FormsService } from '@services/forms/forms.service';
import { PatientsService } from '@services/patients/patients.service';
import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';
import { BreadcrumbComponent } from '@shared/sharedComponent/breadcrumb/breadcrumb.component';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import * as FileSaver from 'file-saver';
import { CardModule } from 'primeng/card';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';

interface Column {
  field: string;
  header: string;
}
interface ExportColumn {
  title: string;
  dataKey: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModuleModule,
    CardModule,
    TableComponent,
    ActionsComponent,
    BreadcrumbComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private DataBindTableService = inject(PatientsService);
  private getFields = inject(FormsService);
  private Route = inject(Router);
  private activateRouter = inject(ActivatedRoute);
  private DashboardService = inject(DashboardService);

  items: any;
  data$: any;
  confirmFields!: FormlyFieldConfig[];
  deleting!: FormlyFieldConfig[];
  updateField!: FormlyFieldConfig[];
  uploadFields!: FormlyFieldConfig[];
  DashboardData$: any;
  cols!: Column[];
  exportColumns!: ExportColumn[];

  records!: any[];

  ngOnInit() {
    this.DashboardData$ = this.DashboardService.dashboardData();
    this.items = [{ label: 'Clinic' }, { label: 'Home' }];
    this.data$ = this.DataBindTableService.getPatients();
    this.confirmFields = this.getFields.gridFields(
      'FieldsConfirmPatientsAppointment',
      [
        [
          {
            media: 'md',
            colNumber: '12',
          },
        ],
        [
          {
            media: 'md',
            colNumber: '6',
          },
        ],
        [
          {
            media: 'md',
            colNumber: '6',
          },
        ],
      ]
    );
    this.deleting = this.getFields.gridFields('FieldsDelete');
    this.updateField = this.getFields.gridFields('FieldUpdatePatient', [
      [
        {
          media: 'md',
          colNumber: '12',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '6',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '6',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '6',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '6',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '12',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '12',
        },
      ],
      [
        {
          media: 'md',
          colNumber: '12',
        },
      ],
    ]);
    this.uploadFields = this.getFields.gridFields('FieldUpload');

    this.DataBindTableService.getPatients().subscribe((data) => {
      this.records = data.result.data;
      this.exportColumns = [
        {
          title: 'ID',
          dataKey: 'id',
        },
        {
          title: 'Full Name',
          dataKey: 'fullName',
        },
        {
          title: 'Birthday',
          dataKey: 'birthday',
        },
        {
          title: 'Age',
          dataKey: 'age',
        },
        {
          title: 'Address',
          dataKey: 'address',
        },
        {
          title: 'Phone_Number',
          dataKey: 'phoneNumber',
        },
      ];
    });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.records);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'records');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }

  routeProfileParent(id: number): void {
    this.Route.navigate([`profile/${id}`], {
      relativeTo: this.activateRouter,
    });
  }
}
