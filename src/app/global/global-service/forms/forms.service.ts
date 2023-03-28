import {FormlyFieldConfig} from '@ngx-formly/core';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FormsService {


  FieldsLogin() : FormlyFieldConfig[] {
    return [
        {
          key : 'username',
          type :'input',
          className : 'filed col-12 ',
          props: {
            placeholder: 'Enter Your userName',
          },
          validators: {
            validation: ['user' , 'noSpecialCharacters'],
          },
        },
        {
          key : 'password',
          type :'input',
          className : 'filed col-12 ',
          props: {
            type : 'password',
            placeholder: 'Enter Your password',
          }
        },
        {
          key : 'remember',
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
          key : 'NationalId',
          type :'input',
          className : 'filed col-12 ',
          props: {
            type : 'number',
            placeholder: 'Enter Your NationalId',
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
            key : 'firstName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your First Name',
            }
          },
          {
            key : 'lastName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Last Name',
            }
          },
          {
            key : 'birthday',
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Age',
              htmlFor:'age',
              id:'age',
              dateFormat:"mm/dd/yy"
            }
          },
          {
            key : 'phoneNumber',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Phone-Number',
              max: 11,
              min:11,
            }
          },
          {
            key : 'gender',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Gender',
              options: [
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' },
              ],
            }
          },
          {
            key : 'address',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Address',
            }
          },
          {
            key : 'chronicDisease',
            type :'switchInput',
            className : 'filed col-12 ',
            props: {
              label : 'Do u have chronic disease',
              id : 'chronic',
            },
          },
          {
            key : 'otherDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What medications are you taking',

            },
            expressions: {
              hide: (field: FormlyFieldConfig) =>{
                return !(field.model?.chronicDisease);;
              }
            },
          },
    ]
  }
  FieldsUpdatePatients() : FormlyFieldConfig[]{
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
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Age',
              htmlFor:'age',
              id:'age'
            }
          },
          {
            key : 'Phone-Number',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Phone-Number',
              max: 11,
              min:11,
            }
          },
          {
            key : 'gender',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Gender',
              options: [
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' },
              ],
            }
          },
          {
            key : 'Address',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Address',
            }
          },
          {
            key : 'medications',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What medications are you taking',
            }
          },
          {
            key : 'Consulted-again',
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Consulted-again',
              htmlFor:'Consulted-again',
              id:'Consulted-again'
            }
          },
          {
            key : 'pharmaceutical',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What pharmaceutical ?',
            }
          },
    ]
  }
  FieldsUpdateAppointments() : FormlyFieldConfig[]{
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
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Age',
              htmlFor:'age',
              id:'age'
            }
          },
          {
            key : 'Phone-Number',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Phone-Number',
              max: 11,
              min:11,
            }
          },
          {
            key : 'gender',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Gender',
              options: [
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' },
              ],
            }
          },
          {
            key : 'Address',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Address',
            }
          },
          {
            key : 'medications',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What medications are you taking',
            }
          },
          {
            key : 'type',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'select Your type Your inquiry',
              options: [
                { label: 'statement', value: 'statement' },
                { label: 'consultation', value: 'consultation' },
              ],
            }
          },
          {
            key : 'booking',
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'booking timing',
              htmlFor:'booking',
              id:'booking',
              time : true,
              second : true,
            }
          },
          {
            key : 'pharmaceutical',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What pharmaceutical ?',
            }
          }
    ]
  }
  FieldsProfilePatients() : FormlyFieldConfig[]{
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
            type :'calender',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Age',
              htmlFor:'age',
              id:'age'
            }
          },
          {
            key : 'Phone-Number',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Phone-Number',
              max: 11,
              min:11,
            }
          },
          {
            key : 'gender',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Gender',
              options: [
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' },
              ],
            }
          },
          {
            key : 'Address',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Address',
            }
          },
    ]
  }
  FieldsConfirmPatients() : FormlyFieldConfig[]{
    return [
      {
        key : 'type',
        type :'select',
        className : 'filed col-12 ',
        props: {
          placeholder: 'select Your type Your inquiry',
          options: [
            { label: 'statement', value: 'statement' },
            { label: 'consultation', value: 'consultation' },
          ],
        }
      },
      {
        key : 'booking',
        type :'calender',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'booking timing',
          htmlFor:'booking',
          id:'booking',
          time : true,
          second : true,
        }
      },
    ]
  }
  FieldsUsers() : FormlyFieldConfig[]{
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
        type :'calender',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'Age',
          htmlFor:'age',
          id:'age'
        }
      },
      {
        key : 'Phone-Number',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Phone-Number',
          max: 11,
          min:11,
        }
      },
      {
        key : 'NationalId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your NationalId',
          max: 14,
          min:14,
        }
      },
      {
        key : 'gender',
        type :'select',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Gender',
          options: [
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ],
        }
      },
      {
        key : 'Address',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Address',
        }
      },
    ]
  }
  FieldsUpdateUsers() : FormlyFieldConfig[]{
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
        type :'calender',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'Age',
          htmlFor:'age',
          id:'age'
        }
      },
      {
        key : 'Phone-Number',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Phone-Number',
          max: 11,
          min:11,
        }
      },
      {
        key : 'NationalId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your NationalId',
          max: 14,
          min:14,
        }
      },
      {
        key : 'gender',
        type :'select',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Gender',
          options: [
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ],
        }
      },
      {
        key : 'Address',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Address',
        }
      },
    ]
  }
  FieldsShowUsers() : FormlyFieldConfig[]{
    return [
      {
        key : 'First-Name',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your First Name',
          disabled : true
        }
      },
      {
        key : 'Last-Name',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Last Name',
          disabled : true
        }
      },
      {
        key : 'Age',
        type :'calender',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'Age',
          htmlFor:'age',
          id:'age',
          disabled : true
        }
      },
      {
        key : 'Phone-Number',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your Phone-Number',
          max: 11,
          min:11,
          disabled : true
        }
      },
      {
        key : 'NationalId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your NationalId',
          max: 14,
          min:14,
          disabled : true
        }
      },
      {
        key : 'gender',
        type :'select',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Gender',
          disabled : true,
          options: [
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ],
        }
      },
      {
        key : 'Address',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          disabled : true,
          placeholder: 'Enter Your Address',
        }
      },
    ]
  }
  FieldsDelete() : FormlyFieldConfig[]{
    return [
      {
        key : 'id',
        type :'input',
        className : 'filed col-12 ',
        props: {
          type : 'hidden',
          placeholder: 'Enter Your First Name',
        }
      },
    ]
  }
  FieldsCheck() : FormlyFieldConfig[]{
    return [
      {
        key : 'id',
        type :'input',
        className : 'filed col-12 ',
        props: {
          type : 'hidden',
          placeholder: 'Enter Your First Name',
        }
      },
    ]
  }
  FieldUpload() : FormlyFieldConfig[]{
    return [
      {
        key : 'FileUpload',
        type :'FileUpload',
        className :'filed col-12 ',
        props: {
          placeholder: 'files',
        }
      },
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
      case 'FieldsProfile' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsProfilePatients())
      break;
      case 'ConfirmPatients' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsConfirmPatients())
      break;
      case 'Users' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsUsers())
      break;
      case 'FieldsDelete' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsDelete())
      break;
      case 'FieldsUpdateUsers' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsUpdateUsers())
      break;
      case 'FieldsShowUsers' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsShowUsers())
      break;
      case 'FieldCheck' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsCheck())
      break;
      case 'FieldUpdatePatient' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsUpdatePatients())
      break;
      case 'FieldUpload' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldUpload())
      break;
      case 'FieldsUpdateAppointments' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsUpdateAppointments())
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
