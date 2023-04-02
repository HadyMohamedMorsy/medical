import { ActivatedRoute, Route, Router } from '@angular/router';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { DialogComponent } from '../dialog/dialog.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogShowComponent } from '../dialog-show/dialog-show.component';
import { DialogUploadComponent } from '../dialog-upload/dialog-upload.component';
import { FieldTypeConfig } from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';
import { UpdateRowTableService } from '@services/updateRowTable/update-row-table.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  private Route = inject(Router);
  private activateRouter = inject(ActivatedRoute);
  private UpdateRowTableService = inject(UpdateRowTableService);
  dialog = inject(MatDialog);
  @Input()  label  !: string;
  @Input()  ConfirmFieldsPatientsTimeAppointments !: FieldTypeConfig[];
  @Input()  UpdatedFields !: FieldTypeConfig[];
  @Input()  uploadFileFields   !: FieldTypeConfig[];
  @Input()  showFields    !: FieldTypeConfig[];
  @Input()  Delete        !: FieldTypeConfig[];
  @Input()  ConfirmStatus !:FieldTypeConfig[];
  @Input()  pageRedirect  !: string | null;
  @Input()  rowData : any;
  @Input()  idRow : any;
  @Output() passId  = new EventEmitter<number>();
  @Input() display : any  

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
        row    : this.rowData,
        id     : this.idRow
      },
    })
  }
  updateUsers() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update',
        fields : this.UpdatedFields,
        type   : 'update-users',
        row    : this.rowData,
        id     : this.idRow
      },
    })
  }
  updatePatientsAppointmentsProfile() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update',
        fields : this.UpdatedFields,
        type   : 'update-Appointment-profile',
        row    : this.rowData,
        id     : this.idRow
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
    const dialogRef = this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      data: {
        title         : `Are you sure about delete this ${status}?`,
        fields        : this.Delete,
        type          : status,
        id            : this.idRow
      },
    })
    dialogRef.afterClosed().subscribe(val=>{
      this.UpdateRowTableService.setDeleteRow(val);
    })
  }
  uploadFile() : void {
    this.dialog.open(DialogUploadComponent,{
      width : '50vw',
      data: {
        title             : 'Upload Attachments',
        appointmentId     : this.idRow
      },
    })
  }
  openCheckDialog(status : string) : void {
    const dialogRef = this.dialog.open(DialogConfirmComponent , {
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
    this.passId.emit(this.idRow);
  }
}
