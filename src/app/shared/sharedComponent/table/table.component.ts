import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import {ButtonModule} from 'primeng/button';
export function tableFactory(tableComponent: TableComponent) {
  return tableComponent.primingTable;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SharedModuleModule  , ButtonModule],
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
})
export class TableComponent {
  @Input() DateBind !: Observable<any>;
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('body') body!: TemplateRef<any>;
  loading = true;
  primingTable: any;
  filteredData$!: Observable<any[]>;
  isLoading = false;

  private  searchSubject = new BehaviorSubject<any>('');

  onSearch(value : any): void {
    this.searchSubject.next(value.value);
  }

  refresh(){
    this.isLoading = !this.isLoading;
    setTimeout(()=>{
      this.isLoading = !this.isLoading;
    },1000)
  }
  loadPagination(event : LazyLoadEvent){
    setTimeout(()=> {
      this.loading = false;
    }, 1000);
  }


}
