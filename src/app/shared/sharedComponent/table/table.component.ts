import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { SharedModuleModule } from '@shared/shared-module.module';
import { LazyLoadEvent } from 'primeng/api';
import { Table, TableService } from 'primeng/table';
import { BehaviorSubject, Observable } from 'rxjs';
import {ButtonModule} from 'primeng/button';
import { RefreshButtonComponent } from '../refresh-button/refresh-button.component';

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
  @Input() DateBind !: Observable<any>;
  @ContentChild('header') header!: TemplateRef<any>;
  @ContentChild('body') body!: TemplateRef<any>;
  loading = true;
  primingTable: any;
  filteredData$!: Observable<any[]>;
  isLoading = false;
  private cdr = inject(ChangeDetectorRef);
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
      this.cdr.detectChanges();
    }, 1000);

  }


}
