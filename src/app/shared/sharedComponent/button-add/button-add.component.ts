import { SharedModuleModule } from '@shared/shared-module.module';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FieldTypeConfig } from '@ngx-formly/core';
import { UpdateRowTableService } from '@services/updateRowTable/update-row-table.service';
import { finalize, map, tap } from 'rxjs';
import {Messages} from '../Messages/Messages';
import { ToastService } from '@services/toast/toast.service';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {
  private UpdateRowTableService = inject(UpdateRowTableService);
  private ToastService = inject(ToastService);

  dialog = inject(MatDialog);
  @Input() label !:string;
  @Input() fields !: FieldTypeConfig[];
  resultValue : any;

  openDialog() : void {
    const dialogRef = this.dialog.open(DialogComponent , {
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
