import { SharedModuleModule } from '@shared/shared-module.module';
import { FieldTypeConfig } from '@ngx-formly/core';
import { Component, inject, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  dialog = inject(MatDialog);
  @Input() label  !: string;
  @Input() ConfirmFields !: FieldTypeConfig[];
  @Input() UpdatedFields !: FieldTypeConfig[];
  @Input() ConfirmDelete !: FieldTypeConfig[];

  openDialog() : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      height : '280px',
      data: {
        title: this.label,
        fields : this.ConfirmFields
      },
    })
  }
}
