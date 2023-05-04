import { BehaviorSubject, Observable, Subject, Subscribable, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation, inject } from '@angular/core';
import { Table, TableService } from 'primeng/table';

import {ButtonModule} from 'primeng/button';
import { LazyLoadEvent } from 'primeng/api';
import { PageRequestService } from '@services/pageRequest/page-request.service';
import { RefreshButtonComponent } from '../refresh-button/refresh-button.component';
import { SearchService } from '@services/search/search.service';
import { SharedModuleModule } from '@shared/shared-module.module';
import { ToastService } from '@services/toast/toast.service';
import { UpdateRowTableService } from '@services/updateRowTable/update-row-table.service';

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
  private UpdateRowTableService = inject(UpdateRowTableService);
  private SearchService = inject(SearchService);
  @Input() DateBind !: Observable<any>;
  @Input() searchTable !:string;
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('body') body!: TemplateRef<any>;
  data : any;
  loading = true;
  primingTable: any;
  filteredData$!: Observable<any[]>;
  isLoading = false;
  Subscription !: Subscription;
  rowData !: Subscription;
  DeleteData !: Subscription;
  updateRowData !:Subscription;
  refreshing !: Subscription;
  searching !: Subscription;
  totalRecord !: number;

  refresh(){
    this.loading = true;
    this.getData();
  }

  ngOnInit() {
    this.rowData = this.UpdateRowTableService.rowData$.subscribe(val =>{
      this.data = [
        val,
        ...this.data ,
      ]
      this.cdr.detectChanges();
    })
    this.DeleteData = this.UpdateRowTableService.DeleteData$.subscribe(val =>{
      this.data = this.data.filter((item : any) => item.id != val);
      this.cdr.detectChanges();
    })
    this.updateRowData = this.UpdateRowTableService.updateRowData$.subscribe(val =>{
      this.data  =  this.data.map((obj : any) => {
        if(obj.id == val.id){
          return {val,...obj};
        }
        return obj;
      })
      this.cdr.detectChanges();

    })
    // i want refactoring here
    this.refreshing = this.UpdateRowTableService.Refresh$.subscribe(val =>{
      this.refresh();
      this.cdr.detectChanges();
    })
  }

  search(content : any){
    if(content.value !=""){
      this.loading = true;
      this.searching = this.SearchService.searchQuery(this.searchTable,content.value.trim())
      .subscribe((val)=>{
        this.loading = false;
        this.data = val.result.data;
        this.totalRecord = val.result.meta.total;
        this.cdr.detectChanges();
        if (this.searching) {
          this.searching.unsubscribe();
        }
      })
    }else{
      this.getData();
    }

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
      this.loading = false;
      this.data = val.result.data;
      this.totalRecord = val.result.meta.total;
      this.ToastService.setMessage(val);
      this.cdr.detectChanges();
      if (this.Subscription) {
        this.Subscription.unsubscribe();
      }
    })
  }

  ngOnDestroy(): void {
    this.rowData.unsubscribe();
    this.DeleteData.unsubscribe();
    this.updateRowData.unsubscribe();
    this.refreshing.unsubscribe();
  }
}
