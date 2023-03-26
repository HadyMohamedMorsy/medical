import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogConfirmComponent>);
  form = new FormGroup({});
  fieldsModel = {};

  onSubmit(fieldsModel : any){

  }
}