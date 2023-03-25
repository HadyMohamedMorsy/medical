import { SharedModuleModule } from '@shared/shared-module.module';
import { FieldTypeConfig } from '@ngx-formly/core';
import { Component, inject, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { DialogShowComponent } from '../dialog-show/dialog-show.component';

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

  routeProfile() : void {
    console.log('hady mohamed');
  }
}
