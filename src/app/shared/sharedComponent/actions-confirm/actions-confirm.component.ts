import { Component, inject, Input } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { FieldTypeConfig } from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-actions-confirm',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './actions-confirm.component.html',
  styleUrls: ['./actions-confirm.component.scss']
})
export class ActionsConfirmComponent {
  dialog = inject(MatDialog);
  @Input() label  !: string;
}
