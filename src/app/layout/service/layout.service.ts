import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private httpCLient: HttpClient) { }

  public count = 0
  counter() {
    return this.count += 1
  }
}
