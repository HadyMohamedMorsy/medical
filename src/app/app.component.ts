import { Component } from '@angular/core';
import {SharedModuleModule} from '@shared/shared-module.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports : [SharedModuleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'medical';
}
