import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  subject: Subject<number>;
  constructor(private httpCLient: HttpClient) {
    this.subject = new Subject<number>();
  }

  sendData(data: number) {
    this.subject.next(data);
  }
}
