import {FormlyFieldConfig} from '@ngx-formly/core';
import { Injectable } from '@angular/core';
import {LoginForm} from '@enum/forms/LoginForm';
import { Forgetpassword } from '@enum/forms/Forgetpassword';
import { FieldsConfirmPassword } from '@enum/forms/FieldsConfirmPassword';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  FieldsLogin() : FormlyFieldConfig[] {
    return [
        {
          key : LoginForm.USERNAME,
          type :'input',
          className : 'filed col-12 ',
          props: {
            placeholder: LoginForm.PLACEHOLDERUSERNAME,
          },
          validators: {
            validation: [LoginForm.VALIDATIONUSERNAME , LoginForm.VALIDATIONUSERNAMECHARACTER],
          },
        },
        {
          key : LoginForm.PASSWORD,
          type :'input',
          className : 'filed col-12 ',
          props: {
            type : 'password',
            placeholder: LoginForm.PLACEHOLDERUSERNAME,
          }
        },
        {
          key : LoginForm.REMEMBER,
          type :'switchInput',
          className : 'col-12 ',
          props: {
            label: LoginForm.LABELREMEMBER,
          }
        },
    ]
  }
  FieldsForgetPassword() : FormlyFieldConfig[] {
    return [
        {
          key : Forgetpassword.NATIONAlID,
          type :'input',
          className : 'filed col-12 ',
          props: {
            type : 'number',
            required: true,
            placeholder: Forgetpassword.PLACEHOLDERNATIONAlID,
          }
        },
    ]
  }
  FieldsConfirmPassword() : FormlyFieldConfig[] {
    return [
        {
          key : FieldsConfirmPassword.CONFIRMPASSWORD,
          type :'input',
          className : 'filed col-12 ',
          props: {
            type :'password',
            required: true,
            placeholder: FieldsConfirmPassword.PLACEHOLDERNEWPASSWORD,
          }
        },
        {
          key : FieldsConfirmPassword.NEWPASSWORD,
          type :'input',
          className : 'col-12 ',
          props: {
            type :'password',
            required: true,
            placeholder: FieldsConfirmPassword.PLACEHOLDERCONFIRMPASSWORD,
          },
          expressions : {
            'props.required' : 'formState.disabled',
          },
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
            type :'datapick',
            className :'filed col-12 ',
            defaultValue : new Date(),
            props: {
              id:'age',
              dateFormat: 'dd.mm.yy',
            },
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
            key : 'id',
            type :'input',
            className : 'filed col-12 ',
            props: {
              type : 'hidden',
            }
          },
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
            key : 'fullName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your fullName',
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
            key : 'birthday',
            type :'datapick',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'birthday',
              htmlFor:'birthday',
              id:'birthday'
            }
          },
          {
            key : 'otherDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              placeholder: 'What otherDetails ?',
            }
          },
    ]
  }
  FieldsUpdateAppointments() : FormlyFieldConfig[]{
    return [
          {
            key : 'id',
            type :'input',
            className : 'filed col-12 ',
            props: {
              type : 'hidden'
            }
          },
          {
            key : 'reservationDate',
            type :'datapick',
            className : 'filed col-12 ',
            defaultValue: new Date(),
            props: {
              label: 'Age',
              htmlFor:'age',
              id:'age'
            }
          },
          {
            key : 'reservationStatus',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'select Your type Your inquiry',
              options: [
                { label: 'complete', value: 'complete' },
                { label: 'cancel', value: 'cancel' },
                { label: 'pending', value: 'pending' },
                { label: 'insideClinic', value: 'insideClinic' },
                { label: 'withDoctor', value: 'withDoctor' },
              ],
            }
          },
          {
            key : 'caseDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label :'caseDetails',
              placeholder: 'Enter Your caseDetails',
              max: 11,
              min:11,
            }
          },
          {
            key : 'doctorReport',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label : 'doctorReport',
              max: 11,
              min:11,
            }
          },
          {
            key : 'appointmentType',
            type :'select',
            className : 'filed col-12 ',
            props: {
              placeholder: 'select Your type Your inquiry',
              options: [
                { label: 'Medical', value: 'Medical' },
                { label: 'Consultation', value: 'Consultation' },
              ],
            }
          },

    ]
  }
  FieldsShowAppointments() : FormlyFieldConfig[]{
    return [
          {
            key : 'patientName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'PatientName',
              className : 'hello',
              placeholder: 'Enter Your First Name',
              disabled : true
            }
          },
          {
            key : 'appointmentType',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'AppointmentType',
              placeholder: 'select Your type Your appointmentType',
              disabled : true
            }
          },
          {
            key : 'reservationDate',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label: 'ReservationDate',
              disabled : true
            }
          },
          {
            key : 'caseDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label: 'CaseDetails',
              placeholder: 'caseDetails',
              disabled : true
            }
          },
          {
            key : 'doctorReport',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label: 'DoctorReport',
              placeholder: 'doctorReport',
              disabled : true
            }
          },
          {
            key : 'reservationStatus',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'ReservationStatus',
              disabled : true
            }
          },
          {
            key : 'createdBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'CreatedBy',
              placeholder: 'createdBy',
              disabled : true
            }
          },
          {
            key : 'updatedBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'UpdatedBy',
              placeholder: 'createdBy',
              disabled : true
            }
          },
          {
            key : 'createdAt',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'CreatedAt',
              placeholder: 'createdBy',
              disabled : true
            }
          },
          {
            key : 'updatedAt',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'UpdatedAt',
              placeholder: 'createdBy',
              disabled : true
            }
          },
    ]
  }
  FieldsShowAppointmentsProfile() : FormlyFieldConfig[]{
    return [
          {
            key : 'patientName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'patientName',
              disabled : true
            }
          },
          {
            key : 'appointmentType',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'appointmentType',
              disabled : true
            }
          },
          {
            key : 'appointmentsCurrentDate',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'appointmentsCurrentDate',
              disabled : true
            }
          },
          {
            key : 'createdBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'createdBy',
              disabled : true
            }
          },
          {
            key : 'createdAt',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label :'createdAt',
              disabled : true
            }
          },
          {
            key : 'updatedBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              label : 'UpdatedBy',
              placeholder: 'createdBy',
              disabled : true
            }
          },
          {
            key : 'caseDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label :'caseDetails',
              disabled : true
            }
          },
          {
            key : 'doctorReport',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              label : 'doctorReport',
              disabled : true
            }
          },
    ]
  }
  FieldsProfilePatients() : FormlyFieldConfig[]{
    return [
          {
            key : 'firstName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your First Name',
              disabled : true
            }
          },
          {
            key : 'lastName',
            type :'input',
            className : 'filed col-12 ',
            props: {
              placeholder: 'Enter Your Last Name',
              disabled : true
            }
          },
          {
            key : 'birthday',
            type :'input',
            className : 'filed col-12 ',
            props: {
              disabled : true
            }
          },
          {
            key : 'age',
            type :'input',
            className : 'filed col-12 ',
            props: {
              disabled : true
            }
          },
          {
            key : 'phoneNumber',
            type :'input',
            className : 'filed col-12 ',
            props: {
              disabled : true,
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
              disabled : true,
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
              disabled : true,
              placeholder: 'Enter Your Address',
            }
          },
          {
            key : 'otherDetails',
            type :'textarea',
            className : 'filed col-12 ',
            props: {
              disabled : true,
              placeholder: 'Enter Your otherDetails',
            }
          },
          {
            key : 'createdBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              disabled : true,
              placeholder: 'Enter Your otherDetails',
            }
          },
          {
            key : 'updatedBy',
            type :'input',
            className : 'filed col-12 ',
            props: {
              disabled : true,
              placeholder: 'Enter Your otherDetails',
            }
          },
    ]
  }
  FieldsConfirmPatientsAppointment() : FormlyFieldConfig[]{
    return [
      {
        key : 'patientId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          type : 'hidden',
        }
      },
      {
        key : 'appointmentType',
        type :'select',
        className : 'filed col-12 ',
        props: {
          placeholder: 'select Your type Your inquiry',
          options: [
            { label: 'medical', value: 'medical'},
            { label: 'consultation', value: 'consultation' },
          ],
        }
      },
      {
        key : 'reservationDate',
        type :'datapick',
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
          type : 'password',
          placeholder: 'Enter Your password',
        }
      },
      {
        key : 'password_confirmation',
        type :'input',
        className : 'filed col-12 ',
        props: {
          type : 'password',
          placeholder: 'Enter Your password_confirmation',
        }
      },
      {
        key : 'userType',
        type :'select',
        className : 'filed col-12 ',
          props: {
            placeholder: 'select Your type Your userType',
            options: [
              { label: 'Doctor', value: 'Doctor' },
              { label: 'Secretarial', value: 'Secretarial' },
            ],
          }
      },
      {
        key : 'birthday',
        type :'datapick',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'Age',
          htmlFor:'age',
          id:'age'
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
        key : 'nationalId',
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
        key : 'address',
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
        key : 'userType',
        type :'select',
        className : 'filed col-12 ',
          props: {
            placeholder: 'select Your type Your userType',
            options: [
              { label: 'Doctor', value: 'Doctor' },
              { label: 'Secretarial', value: 'Secretarial' },
            ],
          }
      },
      {
        key : 'username',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your userName',
        }
      },
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
        type :'datapick',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label: 'birthday',
          htmlFor:'birthday',
          id:'birthday'
        }
      },
      {
        key : 'phoneNumber',
        type :'input',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your phoneNumber',
          max: 11,
          min:11,
        }
      },
      {
        key : 'nationalId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          type:'Number',
          placeholder: 'Enter Your nationalId',
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
        key : 'address',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          placeholder: 'Enter Your address',
        }
      },
    ]
  }
  FieldsShowUsers() : FormlyFieldConfig[]{
    return [
      {
        key : 'firstName',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'firstName',
          placeholder: 'Enter Your First Name',
          disabled : true
        }
      },
      {
        key : 'lastName',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'lastName',
          placeholder: 'Enter Your Last Name',
          disabled : true
        }
      },
      {
        key : 'fullName',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'fullName',
          placeholder: 'Enter Your Last Name',
          disabled : true
        }
      },
      {
        key : 'username',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'username',
          placeholder: 'Enter Your Last Name',
          disabled : true
        }
      },
      {
        key : 'userType',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'userType',
          placeholder: 'Enter Your Last Name',
          disabled : true
        }
      },
      {
        key : 'age',
        type :'input',
        className : 'filed col-12 ',
        defaultValue: new Date(),
        props: {
          label : 'Age',
          disabled : true
        }
      },
        {
          key : 'birthday',
          type :'input',
          className : 'filed col-12 ',
          defaultValue: new Date(),
          props: {
            label : 'birthday',
            disabled : true
          }
        },
      {
        key : 'phoneNumber',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'phoneNumber',
          placeholder: 'Enter Your Phone-Number',
          disabled : true
        }
      },
      {
        key : 'nationalId',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'National_Id',
          placeholder: 'Enter Your NationalId',
          disabled : true
        }
      },
      {
        key : 'gender',
        type :'input',
        className : 'filed col-12 ',
        props: {
          label : 'gender',
          disabled : true
        }
      },
      {
        key : 'otherDetails',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          label : 'otherDetails',
          disabled : true
        }
      },
      {
        key : 'address',
        type :'textarea',
        className : 'filed col-12 ',
        props: {
          label : 'address',
          disabled : true
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
      case 'FieldsConfirmPatientsAppointment' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsConfirmPatientsAppointment())
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
      case 'FieldsShowAppointments' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsShowAppointments())
      break;
      case 'FieldsShowAppointmentsProfile' :
      gridListFields =  this.fireMethods(queryMedia , this.FieldsShowAppointmentsProfile())
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
