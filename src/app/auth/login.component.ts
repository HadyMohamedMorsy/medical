import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import {FormsService} from '@services/forms/forms.service';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { inject } from '@angular/core';

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
    this.fieldsLogin= this.getFieldsLogin.gridFields('login');
  }

  onSubmit(LoginModel : any){
    console.log(this.form);
    console.log('hady'); 
  }
}
