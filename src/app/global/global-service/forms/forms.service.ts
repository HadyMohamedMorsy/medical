import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {GridFields} from 'src/app/global/global-modal/grid-fields';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  gridColum !: string;

  FieldsLogin() : FormlyFieldConfig[] {
    return [
        {
          key : 'username',
          type :'input',
          className : 'filed col-12 ',
          props: {
            placeholder: 'Enter Your userName',
          }
        },
        {
          key : 'password',
          type :'input',
          className : 'filed col-12 ',
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
  FieldsForgetPassword() : FormlyFieldConfig[] {
    return [
        {
          key : 'username',
          type :'input',
          className : 'filed col-12 ',
          props: {
            placeholder: 'Enter Your userName',
          }
        },
    ]
  }

  FieldsConfirmPassword() : FormlyFieldConfig[] {
    return [
        {
          key : 'new-Password',
          type :'input',
          className : 'filed col-12 ',
          props: {
            placeholder: 'Enter Your Password',
          }
        },
        {
          key : 'confirm-Password',
          type :'input',
          className : 'col-12 ',
          props: {
            placeholder: 'confirm Your Password',
          }
        },
    ]
  }

  FieldsPatients() : FormlyFieldConfig[]{
    return [
          {
            key : 'First-Name',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your First Name',
            }
          },
          {
            key : 'Last-Name',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Last Name',
            }
          },
          {
            key : 'Age',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Age',
            }
          },
          {
            key : 'National-ID',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your National-ID',
            }
          },
          {
            key : 'Address',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Address',
            }
          },
          {
            key : 'Phone-Number',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Phone Number',
            }
          }

    ]
  }

  gridFields( methodField : string , queryMedia : any = undefined){
    let gridListFields !: FormlyFieldConfig[]
    switch(methodField){
      case 'login' :
      gridListFields = this.fireMethods(queryMedia , this.FieldsLogin())
      break;
      case 'forgetPassword' :
      gridListFields = this.fireMethods(queryMedia , this.FieldsForgetPassword())
      break;
      case 'confirmPassword' :
      gridListFields = this.fireMethods(queryMedia , this.FieldsConfirmPassword())
      break;
      case 'Patients' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsPatients())
      break;
    }
    return gridListFields
  }

  private fireMethods(
    queryMedia : any = undefined,
    method : FormlyFieldConfig[]
  )
  {
    let gridListFields = method as FormlyFieldConfig[];
    if(queryMedia){
      queryMedia.forEach((field : any , index : number)=>{
        field.forEach((grid : any) => {
          gridListFields[index].className += `${grid.media}:col-${grid.colNumber} `;
        });
      });
      let groupFormFields = [
        {
          fieldGroupClassName : 'grid',
          fieldGroup : [
            ...gridListFields
          ]
        }
      ]
      return groupFormFields;

    }else{

      gridListFields = method;

      return gridListFields;
    }
  }
}
