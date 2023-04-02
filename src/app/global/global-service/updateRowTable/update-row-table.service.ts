import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRowTableService {

  private rowData = new Subject<any>();
  private DeleteRowData = new Subject<any>();

  get rowData$() {
    return this.rowData.asObservable();
  }
  get DeleteData$() {
    return this.DeleteRowData.asObservable();
  }

  setNewData(data : any){
    this.rowData.next(data);
  }

  setDeleteRow(data : any){
    this.DeleteRowData.next(data);
  }
  
}
