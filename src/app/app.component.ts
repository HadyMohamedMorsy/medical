import { Component, inject } from '@angular/core';
import { LoadingService } from '@services/loading/loading.service';
import { ToastComponent } from '@shared/sharedComponent/toast/toast.component';
import {SharedModuleModule} from 'src/app/shared/shared-module.module';
@Component({
  standalone: true,
  selector: 'app-root',
  imports : [SharedModuleModule , ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  LoadingService = inject(LoadingService);
  loading$ = this.LoadingService.loading$;
}
