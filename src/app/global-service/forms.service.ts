import { Injectable } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  Login !: FormlyFieldConfig[];
  gridColum !: string;
  fieldGroupClassName =  'grid';

  FieldsLogin(Colum : number , media : string | undefined = undefined) : FormlyFieldConfig[] {
    if(media){
      this.gridColum = `${media}:col-${12  / Colum}`;
    }else{
      this.gridColum = `col-${12  / Colum}`;
    }
    return [
      {
        fieldGroupClassName: this.fieldGroupClassName,
        fieldGroup : [
          {
            key : 'username',
            type :'input',
            className:`${this.gridColum} filed`,
            props: {
              placeholder: 'Enter Your userName',
            }
          },
          {
            key : 'password',
            type :'input',
            className: `${this.gridColum} filed`,
            props: {
              placeholder: 'Enter Your password',
            }
          },
          {
            key : 'Remember Me',
            type :'switchInput',
            className: `${this.gridColum}`,
            props: {
              label: 'Enter Your password',
            }
          },

        ]
      }
    ]
  }

}
