import { Component, Inject, inject, ViewEncapsulation, NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import  {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SharedModuleModule } from '@shared/shared-module.module';
import { DatePipe } from '@angular/common';
import { PatientsService } from '@services/patients/patients.service';
import { ToastService } from '@services/toast/toast.service';


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
  private ToastService = inject(ToastService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
  dialogRef  = inject(MatDialogRef<DialogComponent>);
  form = new FormGroup({});
  fieldsModel = {};
  calender : any
  keys = ['Age','birthday','Consulted-again','booking']

  ngOnInit() {
    this.calender = this.data.fields[0].fieldGroup.filter((f : any) => this.keys.includes(f.key));
  }
  onSubmit(fieldsModel : any){
    if(this.calender){
      this.calender.forEach((itemField : any) => {
        this.fieldsModel = {
          ...this.fieldsModel,
          [itemField.key] : this.convertTime(itemField)
        }
      });
      this.PatientsService.createPatients(this.fieldsModel).subscribe(val =>{
        this.ToastService.setMessage(val);
        this.dialogRef.close();
      })
    }else{
    }
  }

  private convertTime(itemField : any){
    if(itemField.props.time || itemField.props.second){
      return new Date(this.form.get(itemField.key)?.value).toISOString()
    }else{
      return  new Date(this.form.get(itemField.key)?.value).toISOString().slice(0, 10)
    }
  }

}
