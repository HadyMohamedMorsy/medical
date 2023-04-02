import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRowTableService {

  private rowData = new Subject();

  get rowData$() {
    return this.rowData.asObservable();
  }

  setNewData(data : any){
    this.rowData.next(data);
  }
  
}
