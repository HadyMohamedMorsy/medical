import { Component, Input, inject } from '@angular/core';

import { DialogComponent } from '../dialog/dialog.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogShowComponent } from '../dialog-show/dialog-show.component';
import { FieldTypeConfig } from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  dialog = inject(MatDialog);
  @Input() label  !: string;
  @Input() ConfirmFieldsPatientsTimeAppointments !: FieldTypeConfig[];
  @Input() UpdatedFields !: FieldTypeConfig[];
  @Input() uploadFileFields   !: FieldTypeConfig[];
  @Input() showFields    !: FieldTypeConfig[];
  @Input() Delete        !: FieldTypeConfig[];
  @Input() ConfirmStatus !:FieldTypeConfig[];
  @Input() pageRedirect  !: string | null;
  @Input() rowData : any;
  @Input() idRow : any;

  openDialogToConfirmFieldsPatientsTimeAppointmentsWithPlusIcon() : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      height : '280px',
      data: {
        title         : 'Confirm patient Appointments',
        fields        : this.ConfirmFieldsPatientsTimeAppointments,
        type          : 'confirm-Appointments',
        patientId     : this.idRow
      },
    })
  }
  updatePatients() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update Details Patient',
        fields : this.UpdatedFields,
        type   : 'updatePatient',
        row    : this.rowData
      },
    })
  }
  updateUsers() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update',
        fields : this.UpdatedFields,
        type   : 'update-Appointments'
      },
    })
  }
  updatePatientsAppointmentsProfile() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update',
        fields : this.UpdatedFields,
        type   : 'update-Appointments'
      },
    })
  }
  showRow(status : string) : void {
      this.dialog.open(DialogShowComponent,{
      width : '50vw',
      data: {
        title: 'Details',
        fields : this.showFields,
        type   : status,
        row    : this.rowData
      },
    })
  }
  deleteRow(status : string) : void {
    this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      data: {
        title         : `Are you sure about delete this ${status}?`,
        fields        : this.Delete,
        type          : status,
        id            : this.idRow
      },
    })
  }
  uploadFile() : void {
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Upload Attachments',
        fields : this.uploadFileFields
      },
    })
  }
  openCheckDialog(status : string) : void {
    this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      data: {
        title         : `do you want ${status} status`,
        fields        : this.ConfirmStatus,
        type          : status,
        id            : this.idRow
      },
    })
  }
  routeProfile() : void {
    console.log('hady mohamed');
  }
}
