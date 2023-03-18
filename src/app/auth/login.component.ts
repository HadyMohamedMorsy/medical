import { Component } from '@angular/core';
import { SharedModuleModule} from '@shared/shared-module.module';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { inject } from '@angular/core';
import {FormsService} from '@services/forms.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // injection dependency services
  getFieldsLogin  = inject(FormsService);

  form = new FormGroup({});
  LoginModel = {};
  fieldsLogin !: FormlyFieldConfig[];

  ngOnInit()  {
    this.fieldsLogin = this.getFieldsLogin.FieldsLogin(1);
  }

  onSubmit(LoginModel : any){
    console.log(LoginModel);
  }
}
