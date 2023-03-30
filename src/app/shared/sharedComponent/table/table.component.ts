import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, inject } from '@angular/core';
import { Table, TableService } from 'primeng/table';

import {ButtonModule} from 'primeng/button';
import { LazyLoadEvent } from 'primeng/api';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { RefreshButtonComponent } from '../refresh-button/refresh-button.component';
import { SharedModuleModule } from '@shared/shared-module.module';
import { ToastService } from '@services/toast/toast.service';

export function tableFactory(tableComponent: TableComponent) {
  return tableComponent.primingTable;
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModuleModule  , ButtonModule, RefreshButtonComponent],
  providers: [
    TableService,
    {
      provide: Table,
      useFactory: tableFactory,
      deps: [TableComponent]
    }
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
  private cdr = inject(ChangeDetectorRef);
  private PageRequestService = inject(PageRequestService);
  private ToastService = inject(ToastService);
  @Input() DateBind !: Observable<any>;
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('body') body!: TemplateRef<any>;
  data : any;
  loading = true;
  primingTable: any;
  filteredData$!: Observable<any[]>;
  isLoading = false;
  Subscription !: Subscription;
  totalRecord !: number;


  refresh(){
    this.loading = true;
    this.getData();
  }

  loadPagination(event : LazyLoadEvent){
    this.loading = true;
    let rows= event.rows!;
    let currentPage  = event.first!;
    currentPage == 0 ?  currentPage = 10 : currentPage = event.first! + 10;
    this.PageRequestService.changePage(currentPage / rows);
    this.getData();
  }

  private getData(){
    this.Subscription = this.DateBind.subscribe((val)=>{
      console.log(val);
      
      this.loading = false;
      this.data = val.result.data;
      this.totalRecord = val.result.meta.total;
      this.ToastService.setMessage(val);
      if (this.Subscription) {
        this.Subscription.unsubscribe();
      }
      this.cdr.detectChanges();
    })
  }

  ngOnDestroy() {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }
}
