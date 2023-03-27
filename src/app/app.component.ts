import { Component, inject } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';
import {SharedModuleModule} from 'src/app/shared/shared-module.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports : [SharedModuleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  LoadingService = inject(LoadingService);
  loading$ = this.LoadingService.loading$;
}
