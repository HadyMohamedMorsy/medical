import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout'
import { Component, EventEmitter, Output, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ContainerService } from '@services/container/container.service';
import { LayoutModule } from '@angular/cdk/layout';
import {PanelMenuModule} from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule , SidebarModule , 
  PanelMenuModule , LayoutModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  
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
        },
        {
            label: 'inside-clinic',
            icon: 'pi pi-sitemap',
            routerLink : './inside-clinic',
        },
        {
            label: 'with-doctor',
            icon: 'pi pi-user-plus',
            routerLink : './with-doctor',
        },
        {
            label: 'users',
            icon: 'pi pi-users',
            routerLink : './users',
        },
    ];

    this.breakpointObserver
    .observe(['(min-width: 991px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.display = true;
      } else {
        this.display = false;
      }
      console.log(this.display);
      
    });

  }
  
}
