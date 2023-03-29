import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Subscription, delay } from 'rxjs';

import { AuthService } from '@services/auth/auth.service';
import { LoadingService } from '@services/loading/loading.service';
import {SharedModuleModule} from 'src/app/shared/shared-module.module';
import { ToastComponent } from '@shared/sharedComponent/toast/toast.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports : [SharedModuleModule , ToastComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  private cdr = inject(ChangeDetectorRef);
  LoadingService = inject(LoadingService);
  loginProcess    = inject(AuthService);
  loading$    = this.LoadingService.loading$;
  display : boolean = true;
  ngOnInit(): void {
    this.loginProcess.autoLogin();
    this.loading$.subscribe(value =>{
      this.display = value;
      this.cdr.detectChanges();
    })
  }

}
