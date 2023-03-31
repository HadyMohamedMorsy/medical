import { Component } from '@angular/core';
import { SharedModuleModule} from 'src/app/shared/shared-module.module';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import {FormsService} from '@services/forms/forms.service';
import { AuthService } from '@services/auth/auth.service';
@Component({
  selector: 'app-confirm-password',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent {

  // injection dependency services
  getFieldsConfirmPassword  = inject(FormsService);
  AuthService = inject(AuthService);

  form = new FormGroup({});
  ConfirmPasswordModel = {};
  fieldsConfirmPassword !: FormlyFieldConfig[];

  ngOnInit()  {
    this.fieldsConfirmPassword= this.getFieldsConfirmPassword.gridFields('confirmPassword');
    this.AuthService.autoForgetPassword();
  }

  onSubmit(LoginModel : any){
    console.log(LoginModel);
  }

}
