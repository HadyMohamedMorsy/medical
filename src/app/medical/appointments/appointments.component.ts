import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleModule } from '@shared/shared-module.module';
import { TableComponent } from '@shared/sharedComponent/table/table.component';
import { AppointmentsService } from '@services/appointments/appointments.service';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule , SharedModuleModule , TableComponent],
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
  providers: [AppointmentsService]
})
export class AppointmentsComponent {
  private AppointmentsServiceService =  inject(AppointmentsService);
  Appointments : any;
  items : any;
  display: boolean = false;

  ngOnInit(): void {
    this.items = [
      {label:'Clinic'},
      {label:'Appointments'},
    ];
    this.Appointments = this.AppointmentsServiceService.getAppointments();

  }


  showDialog() {
      this.display = true;
  }
}
