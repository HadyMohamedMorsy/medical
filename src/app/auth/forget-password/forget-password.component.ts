import { Component } from '@angular/core';
import { SharedModuleModule} from '@shared/shared-module.module';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import {FormsService} from '@services/forms.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  // injection dependency services
  getFieldsForgetPassword  = inject(FormsService);

  form = new FormGroup({});
  ForgetPasswordModel = {};
  fieldsForgetPassword !: FormlyFieldConfig[];

  ngOnInit()  {
    this.fieldsForgetPassword= this.getFieldsForgetPassword.gridFields('forgetPassword');
  }

  onSubmit(LoginModel : any){
    console.log(LoginModel);
  }
}
