import { Component, Input, inject } from '@angular/core';

import { DialogComponent } from '../dialog/dialog.component';
import { FieldTypeConfig } from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';

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

  openDialog() : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      data: {
        title: this.label,
        fields : this.fields,
        type : this.label
      },
    })
  }
}
