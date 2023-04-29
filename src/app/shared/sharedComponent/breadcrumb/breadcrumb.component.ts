import { Component , inject, Input} from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { ContainerService } from '@services/container/container.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModuleModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  ContainerService = inject(ContainerService);
  display : boolean = false;
  @Input() items : any;

  openSideBar(){
    this.display = !this.display;
    this.ContainerService.setContainer(this.display);
  }
}
