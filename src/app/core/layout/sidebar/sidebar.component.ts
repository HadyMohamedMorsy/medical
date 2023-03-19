import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , SidebarModule , PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  display = true
  items : any;
  ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-calendar-plus',
        },
        {
            label: 'Appointments',
            icon: 'pi pi-shopping-bag',
        },
        {
            label: 'Patients',
            icon: 'pi pi-users',
        }
    ];
}
}
