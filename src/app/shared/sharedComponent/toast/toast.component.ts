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
        console.log(val);
        switch(val.status){
          case 200 :
          this.MessageService.add({ severity: 'success', summary: 'Success', detail: `${val.message}` });
          break;
          case 404 :
          this.MessageService.add({ severity: 'error', summary: 'error', detail: `${val.errors}` });
          break;
          default:
          this.MessageService.add({ severity: 'error', summary: 'error', detail: `there is something wrong` });
        }
      }
    })
  }

}
