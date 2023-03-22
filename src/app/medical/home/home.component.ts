import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { Component, inject } from '@angular/core';
import { CardModule} from 'primeng/card';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { PatientsService } from '@services/patients/patients.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModuleModule , CardModule , TableComponent],
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

