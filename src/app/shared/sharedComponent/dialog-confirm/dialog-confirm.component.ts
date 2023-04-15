import { Component, Inject, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AppointmentsService } from '@services/appointments/appointments.service';
import { PatientsService } from '@services/patients/patients.service';
import { ToastService } from '@services/toast/toast.service';
import { UsersService } from '@services/users/users.service';
import { SharedModuleModule } from '@shared/shared-module.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-confirm',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {
  [x: string]: any;
  private ToastService = inject(ToastService);
  private UsersService = inject(UsersService);
  private PatientsService = inject(PatientsService);
  private AppointmentsService = inject(AppointmentsService);
  Subscription: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogConfirmComponent>);
  form = new FormGroup({});
  fieldsModel = {};

  ngOnInit(): void {
    this.setModel(this.data.id , 'id');
    console.log(this.fieldsModel);

  }

  onSubmit(fieldsModel : any){
    this.submitRequest(this.data.type , fieldsModel);
  }

  private setModel(checkId : any , key : any) {
    if(checkId){
      if(!this.data.changeStatus){
        this.fieldsModel = {
          [key] : checkId
        }
      }else{
        this.fieldsModel = {
          [key] : checkId,
          reservationStatus : this.data.type
        }
      }
    }
  }

  private submitCheckRequest(type : string , modalValue : any) : void | Observable<any>{
    switch(type){
      case 'patient' :
      return this.PatientsService.deletePatient(modalValue);
      break;
      case 'users' :
      return this.UsersService.deleteUsers(modalValue);
      break;
      default :
      return this.AppointmentsService.changeStatusAppointment(modalValue);

    }
  }

  private submitRequest(type : string , modalValue : any){
    const submission = this.submitCheckRequest(type , modalValue) as Observable<any>
    this.Subscription = submission.subscribe(val =>{
      this.ToastService.setMessage(val);
      this.dialogRef.close(this.data.id)

    })
  }

  ngOnDestroy(): void {
    if(this.Subscription){
      this.Subscription.unsubscribe();
    }
  }
}
