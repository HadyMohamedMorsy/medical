import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule  , BadgeModule , AvatarModule , ButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
