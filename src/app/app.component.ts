import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { AuthService } from '@services/auth/auth.service';
import { LoadingService } from '@services/loading/loading.service';
import { ToastComponent } from '@shared/sharedComponent/toast/toast.component';
import { delay, Subscription } from 'rxjs';
import {SharedModuleModule} from 'src/app/shared/shared-module.module';
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
  loading$    = this.LoadingService.loading$;
  display : boolean = true;
  loginProcess    = inject(AuthService);
  ngOnInit(): void {
    this.loginProcess.autoLogin();
    this.loading$.subscribe(value =>{
      this.display = value;
      this.cdr.detectChanges();
    })
  }

}
