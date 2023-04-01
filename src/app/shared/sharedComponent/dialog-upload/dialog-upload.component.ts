import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';
import { UploadComponent } from '../upload/upload.component';
import { AppointmentsService } from '@services/appointments/appointments.service';
@Component({
  selector: 'app-dialog-upload',
  standalone: true,
  imports: [SharedModuleModule , UploadComponent],
  templateUrl: './dialog-upload.component.html',
  styleUrls: ['./dialog-upload.component.scss']
})
export class DialogUploadComponent {
  AppointmentsService = inject(AppointmentsService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogUploadComponent>);
  uploadFile(Files : any){
    const formData: FormData = new FormData();
    for (let i = 0; i < Files.length; i++) {
      formData.append('images[]', Files[i]);
    }
    formData.append('appointmentId', this.data.appointmentId);
    this.AppointmentsService.uploadFiles(formData).subscribe(file =>{
      console.log(file);
    })
  }

}
