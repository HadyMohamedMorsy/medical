import { Component } from '@angular/core';
import { SharedModuleModule} from 'src/app/shared/shared-module.module';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import {FormsService} from '@services/forms/forms.service';
import { AuthService } from '@services/auth/auth.service';
import { UserForget } from '../../global/global-service/auth/forget_password-model';
import { Subscription, switchMap } from 'rxjs';
import { Router } from '@angular/router';
import { FieldsConfirmPassword } from '@enum/forms/FieldsConfirmPassword';

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
  id : any
  Subscription !: Subscription
  router = inject(Router);


  form = new FormGroup({});
  ConfirmPasswordModel = {};
  fieldsConfirmPassword !: FormlyFieldConfig[];
  ngOnInit()  {
    this.fieldsConfirmPassword= this.getFieldsConfirmPassword.gridFields('confirmPassword');
    this.AuthService.autoForgetPassword();

    this.Subscription = this.AuthService.Forget.subscribe(val =>{
      this.id = val.id
      this.ConfirmPasswordModel = {
        ...this.ConfirmPasswordModel,
        id : this.id,
      }
    })
  }

  onSubmit(confirmPassword : any){
    
    this.AuthService.confirmPasswordRequest(confirmPassword).subscribe((val)=>{
      this.router.navigate(['/login']);
      localStorage.clear();
    })

  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

}
