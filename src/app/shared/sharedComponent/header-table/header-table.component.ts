import { FieldTypeConfig } from '@ngx-formly/core';
import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header-table',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent {
  dialog = inject(MatDialog);
  @Input() header !:string;
  @Input() label  !: string;
  @Input() fields !: FieldTypeConfig[];

  openDialog(enterAnimationDuration : string , exitAnimationDuration: string) : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      data: {
        title: this.label,
        fields : this.fields
      },
    })
  }
}
