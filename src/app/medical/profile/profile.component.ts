import { Component, inject } from '@angular/core';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { TimelineModule } from 'primeng/timeline';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig} from '@ngx-formly/core';
import { FormsService } from '@services/forms/forms.service';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { PatientsService } from '@services/patients/patients.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModuleModule , TimelineModule , TableComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers : [PatientsService]
})
export class ProfileComponent {
  private PatientsService =  inject(PatientsService);
  private getFieldsPatients  = inject(FormsService);
  events : any;
  items : any;
  patients$ : any;
  fieldsModel  = {};
  form = new FormGroup({});
  PatientsFields !: FormlyFieldConfig[]
  
  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'profile'},
    ];

    this.events = [
      { status: 'statement', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#EF4444', image: 'game-controller.jpg' },
      { status: 'consultation', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#EF4444' },
      { status: 'consultation', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#EF4444' },
    ];
    this.patients$ = this.PatientsService.getPatients();

    this.PatientsFields = this.getFieldsPatients.gridFields('FieldsProfile',
      [
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '6'
          },
        ],
        [
          {
            media : 'md',
            colNumber : '12'
          },
        ],
      ]
    )
  }

  onSubmit(fieldsModel : any){

  }
}
