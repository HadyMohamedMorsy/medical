import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DialogService } from '@services/dialog/dialog.service';
import { Observable } from 'rxjs';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  display !: boolean
  dialogService = inject(DialogService);
  subscripeDialog : any;
  isLoading = false;
  @Input()  header !:string;
  @Input() label !:string

  ngOnInit(): void {
    this.dialogService.getDisplay().subscribe((val)=>{
      this.display = val
      console.log(this.display);
    })
  }
  onClose() {
    this.dialogService.setDisplay(!this.display);
  }

}
