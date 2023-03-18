import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {GridFields} from '@modal/grid-fields';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  gridColum !: string;
  fieldGroupClassName =  'grid';

  FieldsLogin() : FormlyFieldConfig[] {
    return [
      {
        fieldGroupClassName: this.fieldGroupClassName,
        fieldGroup : [
          {
            key : 'username',
            type :'input',
            className : 'col-12 ',
            props: {
              placeholder: 'Enter Your userName',
            }
          },
          {
            key : 'password',
            type :'input',
            className : 'col-12 ',
            props: {
              placeholder: 'Enter Your password',
            }
          },
          {
            key : 'Remember Me',
            type :'switchInput',
            className : 'col-12 ',
            props: {
              label: 'Remember Me',
            }
          },
        ]
      }
    ]
  }

  gridFields(queryMedia : any = undefined , methodField : string){
    let gridListFields = this.FieldsLogin()[0]?.fieldGroup as FormlyFieldConfig[];
    switch(methodField){
        case 'login' :
        gridListFields = this.FieldsLogin()[0]?.fieldGroup as FormlyFieldConfig[];
        if(queryMedia){
          queryMedia.forEach((field : any , index : number)=>{
            field.forEach((grid : any) => {
              gridListFields[index].className += `${grid.media}:col-${grid.colNumber} `;
            });
          });
        }else{
          gridListFields = this.FieldsLogin();
        }
      break;
    }
    return gridListFields
  }
}
