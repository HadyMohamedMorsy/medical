import { SharedModuleModule } from '@shared/shared-module.module';
import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastService } from '@services/toast/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  providers: [MessageService]
})
export class ToastComponent {
  MessageService = inject(MessageService);
  ToastService = inject(ToastService);
  ngOnInit(): void {
    this.ToastService.message$.subscribe((val)=>{
      if(val){
        if(val.status == 404){
          this.MessageService.add({ severity: 'error', summary: 'error', detail: `${val.message}` });
        }else{
          this.MessageService.add({ severity: 'success', summary: 'Success', detail: `${val.message}` });
        }
      }
    })
  }

}
