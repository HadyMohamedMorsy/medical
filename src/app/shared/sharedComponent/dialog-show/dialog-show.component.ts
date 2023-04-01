import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { UsersService } from '@services/users/users.service';
import { SharedModuleModule } from '@shared/shared-module.module';
interface FieldsModel {
  [key: string]: any;
}

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
  showPage = this.data.type;

  ngOnInit(): void {
    this.ShowFieldsWithData(this.data.row);
    console.log(this.data.row);

  }


  private ShowFieldsWithData(data: any) {
    this.fieldsModel = data;
    console.log(this.fieldsModel);
  }

}
