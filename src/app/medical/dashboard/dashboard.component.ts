import { RouterModule } from '@angular/router';
import { Component, inject , ViewChild, ElementRef, Renderer2} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from '@core/layout/header/header.component';
import { SidebarComponent } from '@core/layout/sidebar/sidebar.component';
import { ContainerService } from '@services/container/container.service';
import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule , RouterModule , HeaderComponent , SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers : [ContainerService]
})
export class DashboardComponent {
  ContainerService = inject(ContainerService);
  breakpointObserver = inject(BreakpointObserver);
  renderer = inject(Renderer2);
  @ViewChild('pRef', {static: false}) pRef!: ElementRef;

  ngOnInit(): void {
    this.breakpointObserver
    .observe(['(min-width: 991px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.ContainerService.setContainer(true);
      } else {
        this.ContainerService.setContainer(false);
      }
    });
  }

  ngAfterViewInit() {
    const container = this.pRef.nativeElement;
    this.ContainerService.getContainer().subscribe((val)=>{
      if(!val){
        container.classList.add('remove-padding');
      }else{
        container.classList.remove('remove-padding');
      }
    })
  }
}
