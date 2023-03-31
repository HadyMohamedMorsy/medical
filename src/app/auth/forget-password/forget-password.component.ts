import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedModuleModule} from 'src/app/shared/shared-module.module';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import {FormsService} from '@services/forms/forms.service';
import { AuthService } from '@services/auth/auth.service';

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
  AuthService = inject(AuthService);
  router = inject(Router);

  form = new FormGroup({});
  ForgetPasswordModel = {};
  fieldsForgetPassword !: FormlyFieldConfig[];

  ngOnInit()  {
    this.fieldsForgetPassword= this.getFieldsForgetPassword.gridFields('forgetPassword');
  }

  onSubmit(LoginModel : any){
    this.AuthService.forgetPassword(LoginModel).subscribe((val)=>{
      if(val.status == 200){
        this.router.navigate(['/confirm-password']);
      }
      return
    })
  }
}
