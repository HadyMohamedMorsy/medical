import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';

@Component({
  selector: 'app-dialog-show',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog-show.component.html',
  styleUrls: ['./dialog-show.component.scss']
})
export class DialogShowComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogShowComponent>);
  form = new FormGroup({});
  fieldsModel = {};

  onSubmit(fieldsModel : any){

  }
  
}
