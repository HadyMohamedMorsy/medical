import { Component, Output, EventEmitter, Input, inject } from '@angular/core';
import { DialogService } from '@services/dialog/dialog.service';
import { SharedModuleModule } from '@shared/shared-module.module';

@Component({
  selector: 'app-header-table',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent {
  dialogService = inject(DialogService);
  @Input() label  !: string;
  @Input() header !:string;
  value = false;

  showDialog(){
    this.dialogService.setDisplay(true);
  }
}
