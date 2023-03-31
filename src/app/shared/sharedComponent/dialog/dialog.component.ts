import { Observable, Subscriber, Subscription } from 'rxjs';
import { Component, Inject, inject, ViewEncapsulation, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';
import { DatePipe } from '@angular/common';
import { PatientsService } from '@services/patients/patients.service';
import { ToastService } from '@services/toast/toast.service';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { UsersService } from '@services/users/users.service';
interface FieldsModel {
  [key: string]: any;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation : ViewEncapsulation.None,
  providers : [DatePipe]
})
export class DialogComponent {
  private PatientsService = inject(PatientsService);
  private AppointmentsService = inject(AppointmentsService)
  private ToastService = inject(ToastService);
  private UsersService = inject(UsersService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogComponent>);
  form = new FormGroup({});
  fieldsModel = {};
  keys = ['Age','birthday','reservationDate','booking'];
  calender : any;
  Subscription !: Subscription;

  ngOnInit() {
    this.calender = this.data.fields[0].fieldGroup.filter((f : any) => this.keys.includes(f.key));
    this.setModel(this.data.patientId , 'patientId');
    this.updateFieldsWithData(this.data.row);
  }

  onSubmit(fieldsModel : any){
    if(this.calender){
      this.calender.forEach((itemField : any) => {
        this.fieldsModel = {
          ...this.fieldsModel,
          [itemField.key] : this.convertTime(itemField)
        }
      });
      this.submitRequest(this.data.type , this.fieldsModel);
    }else{
      this.submitRequest(this.data.type , fieldsModel);
    }
  }

 private updateFieldsWithData(data: any) {
    if(data){
      this.fieldsModel = data;
      this.data.fields[0].fieldGroup.forEach((field : any) => {
        if (this.fieldsModel.hasOwnProperty(field.key)) {
          const value = (this.fieldsModel as FieldsModel)[field.key];
          this.form.patchValue(value);
        }
      });
    }
  }

  private setModel(checkId : any , key : any) {
    if(checkId){
      this.fieldsModel = {
        [key] : this.data.patientId
      }
    }
  }

  private submitCheckRequest(type : string , modalValue : any) : void | Observable<any> | string{
    switch(type){
      case 'Patients' :
      return this.PatientsService.createPatients(modalValue);
      break;
      case 'confirm-Appointments' :
      return this.AppointmentsService.confirmPatientAppointments(modalValue);
      break;
      case 'users' :
      return this.UsersService.createUsers(modalValue);
      break;
      case 'delete-Patient' :
      return this.PatientsService.deletePatient(modalValue);
      break;
      case 'delete-Users' :
      return this.UsersService.deleteUsers(modalValue);
      break;
      case 'updatePatient' :
      return this.PatientsService.updatePatient(this.data.id, modalValue);
      break;
      case 'update-users' :
      return this.UsersService.updateUsers(this.data.id, modalValue);
      break;
      return 'there is no request here'
    }
  }

  private convertTime(itemField : any){
    if(itemField.props.time || itemField.props.second){
      return new Date(new Date(this.form.get(itemField.key)?.value).toISOString()).toLocaleString();
    }else{
      return  new Date(this.form.get(itemField.key)?.value).toISOString().slice(0, 10)
    }
  }

  private submitRequest(type : string , modalValue : any){
    const submission = this.submitCheckRequest(type , modalValue) as Observable<any>
    this.Subscription = submission.subscribe(val =>{
      this.ToastService.setMessage(val);
      this.dialogRef.close()
    })
  }

  ngOnDestroy(): void {
    if(this.Subscription){
      this.Subscription.unsubscribe();
    }
  }

}
