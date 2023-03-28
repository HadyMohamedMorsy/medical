import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { BehaviorSubject, Observable, Subscribable, Subscription } from 'rxjs';
import {ButtonModule} from 'primeng/button';
import { RefreshButtonComponent } from '../refresh-button/refresh-button.component';
import { PageRequestService } from '@services/pageRequest/page-request.service';
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
    this.DateBind.subscribe((val)=>{
      this.loading = false;
      this.data = val.result.data;
      this.totalRecord = val.result.meta.total;
      this.ToastService.setMessage(val);
      this.cdr.detectChanges();
    })
  }
}
