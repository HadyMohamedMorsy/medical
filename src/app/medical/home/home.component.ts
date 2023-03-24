import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { Component, inject } from '@angular/core';
import { CardModule} from 'primeng/card';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { PatientsService } from '@services/patients/patients.service';
import { ActionsComponent } from '@shared/sharedComponent/actions/actions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModuleModule , CardModule , TableComponent ,ActionsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PatientsService]
})
export class HomeComponent {

  private PatientsService =  inject(PatientsService);
  items : any;
  patients$ : any;


  ngOnInit() {
    this.items = [
        {label:'Clinic'},
        {label:'Home'},
    ];
    this.patients$ = this.PatientsService.getPatients();
  }

}

