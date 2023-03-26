import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  container = new BehaviorSubject(false);

  setContainer(val : boolean) {
    this.container.next(val);
  }

  getContainer() {
    return this.container
  }
}
