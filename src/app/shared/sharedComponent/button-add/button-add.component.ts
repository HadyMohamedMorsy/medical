import { SharedModuleModule } from '@shared/shared-module.module';
import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-button-add',
  standalone: true,
  imports: [SharedModuleModule , DialogComponent],
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {
  dialog = inject(MatDialog);
  @Input() label !:string;
  @Input() fields !: FieldTypeConfig[];

  openDialog() : void {
    this.dialog.open(DialogComponent , {
      width : '50vw',
      data: {
        title: this.label,
        fields : this.fields
      },
    })
  }
}
