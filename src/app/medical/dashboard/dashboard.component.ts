import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from '@core/layout/header/header.component';
import { SidebarComponent } from '@core/layout/sidebar/sidebar.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule , RouterModule , HeaderComponent , SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
