import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';


@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogComponent>);
  form = new FormGroup({});
  fieldsModel = {
  };


  onSubmit(fieldsModel : any){
    
    console.log(fieldsModel);
  }

}
