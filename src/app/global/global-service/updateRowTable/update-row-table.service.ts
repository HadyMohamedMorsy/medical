import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRowTableService {

  private rowData = new Subject<any>();
  private DeleteRowData = new Subject<any>();
  private updateRowData = new Subject<any>();
  private refresh = new Subject<any>();

  get rowData$() {
    return this.rowData.asObservable();
  }
  get DeleteData$() {
    return this.DeleteRowData.asObservable();
  }
  get updateRowData$() {
    return this.updateRowData.asObservable();
  }
  get Refresh$() {
    return this.refresh.asObservable();
  }

  setNewData(data : any){
    this.rowData.next(data);
  }

  setDeleteRow(data : any){
    this.DeleteRowData.next(data);
  }

  setUpdateRow(data : any){
    this.updateRowData.next(data);
  }

  setRefresh(data : any){
    this.refresh.next(data);
  }

}
