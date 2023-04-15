import { Component, Input, inject } from '@angular/core';
import { finalize, map, tap } from 'rxjs';

import { DialogComponent } from '../dialog/dialog.component';
import { FieldTypeConfig } from '@ngx-formly/core';
import {MatDialog} from '@angular/material/dialog';
import {Messages} from '../Messages/Messages';
import { SharedModuleModule } from '@shared/shared-module.module';
import { ToastService } from '@services/toast/toast.service';
import { UpdateRowTableService } from '@services/updateRowTable/update-row-table.service';

@Component({
  selector: 'app-header-table',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent {
  private UpdateRowTableService = inject(UpdateRowTableService);
  private ToastService = inject(ToastService);
  dialog = inject(MatDialog);
  @Input() header !:string;
  @Input() label  !: string;
  @Input() fields !: FieldTypeConfig[];
  resultValue : any;

  openDialog() : void {
  const dialogRef  = this.dialog.open(DialogComponent , {
      width : '50vw',
      data: {
        title: this.label,
        fields : this.fields,
        type : this.label
      },
    })
    dialogRef.afterClosed().pipe(
      map(({result}) => result),
      tap(res =>{
        this.resultValue =  Messages(res);
      }),
      finalize(() =>
        this.ToastService.setMessage(
          this.resultValue
        )
      )
    ).subscribe((responseValue) => {
      this.UpdateRowTableService.setNewData(responseValue);
    });
  }
}
