import { Component, inject, Input } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { FieldTypeConfig } from '@ngx-formly/core';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-actions-confirm',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './actions-confirm.component.html',
  styleUrls: ['./actions-confirm.component.scss']
})
export class ActionsConfirmComponent {
  dialog = inject(MatDialog);
  @Input() ConfirmStatus !:FieldTypeConfig[];

  openCheckDialog(status : string) : void {
    this.dialog.open(DialogConfirmComponent , {
      width : '50vw',
      data: {
        title: `do you want ${status} status`,
        fields : this.ConfirmStatus
      },
    })
  }
}
