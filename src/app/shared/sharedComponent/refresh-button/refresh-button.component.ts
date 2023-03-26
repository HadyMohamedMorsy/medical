import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-refresh-button',
  standalone: true,
  imports: [CommonModule , ButtonModule],
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.scss']
})
export class RefreshButtonComponent {
  @Input() Loading !:boolean;
  refresh(){

  }
}
