import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private dialogSource = new BehaviorSubject<{ state: boolean, type: string }>({ state: false, type: '' });
  dialogState$ = this.dialogSource.asObservable();

  openDialog(type:string) {
    this.dialogSource.next({ state: true, type: type });
  }

  closeDialog() {
    this.dialogSource.next({ state: false, type: '' });
  }
  constructor() { }
}
