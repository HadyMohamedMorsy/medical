
import { CommonModule } from '@angular/common';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { SidebarModule} from 'primeng/sidebar';
import {PanelMenuModule} from 'primeng/panelmenu';
import { LayoutModule } from '@angular/cdk/layout';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout'
import { ContainerService } from '@services/container/container.service';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , SidebarModule , 
  PanelMenuModule , LayoutModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers : [ContainerService]
})
export class SidebarComponent {
  breakpointObserver = inject(BreakpointObserver);
  ContainerService = inject(ContainerService);
  display = true
  items : any;
  ngOnInit() {
    this.items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-calendar-plus',
            routerLink : '/clinic',
        },
        {
            label: 'Appointments',
            icon: 'pi pi-shopping-bag',
            routerLink : './appointments',
        },
        {
            label: 'Patients',
            icon: 'pi pi-users',
            routerLink : './patients',
        },
        {
            label: 'Confirm-Patients',
            icon: 'pi pi-check',
            routerLink : './Confirm-Patients',
        }
    ];

    this.breakpointObserver
    .observe(['(min-width: 991px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.display = true;
      } else {
        this.display = false;
      }
    });

  }
  
}
