import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService} from '@services/forms/forms.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { inject } from '@angular/core';
import { Login, LoginForm} from '@modal/login';
import { AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [AuthService]

})
export class LoginComponent {
  // injection dependency services
  getFieldsLogin  = inject(FormsService);
  loginProcess    = inject(AuthService);
  private route   = inject(Router);
  messageToast !: any;

  form = new FormGroup({});
  LoginModel = LoginForm;
  fieldsLogin !: FormlyFieldConfig[];

  ngOnInit()  {
    this.fieldsLogin= this.getFieldsLogin.gridFields('login');
    this.loginProcess.autoLogin();

  }
  onSubmit(LoginModel : Login){
    this.loginProcess.login(LoginModel).subscribe((val)=>{
    })
  }
}
