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
  @Input() ConfirmFields !: FieldTypeConfig[];
  @Input() UpdatedFields !: FieldTypeConfig[];
  @Input() uploadFileFields   !: FieldTypeConfig[];
  @Input() showFields    !: FieldTypeConfig[];
  @Input() Delete        !: FieldTypeConfig[];
  @Input() ConfirmStatus !:FieldTypeConfig[];
  @Input() pageRedirect  !: string | null;
  
  openDialog() : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      height : '280px',
      data: {
        title: 'Confirm Time',
        fields : this.ConfirmFields
      },
    })
  }
  updateDialog() : void{
    this.dialog.open(DialogComponent,{
      width : '50vw',
      data: {
        title: 'Are you sure about Update',
        fields : this.UpdatedFields
      },
    })
  }
  showDialog() : void{
    this.dialog.open(DialogShowComponent,{
      width : '50vw',
      data: {
        title: 'Details',
        fields : this.showFields
      },
    })
  }
  deleteConfirm(){
    this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      data: {
        title: 'Are you sure about delete ?',
        fields : this.Delete
      },
    })
  }
  confirmDialog() : void{
    this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      height : '280px',
      data: {
        title: this.label,
        fields : this.ConfirmFields
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
        title: `do you want ${status} status`,
        fields : this.ConfirmStatus
      },
    })
  }

  routeProfile() : void {
    console.log('hady mohamed');
  }
}
